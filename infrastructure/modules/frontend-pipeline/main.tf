resource "aws_s3_bucket" "artifacts" {
  bucket = "${var.deploy_bucket}-pipeline-artifacts-${var.env}"
  acl = "private"
}

resource "aws_iam_role" "codepipeline_role" {
  name = "${var.deploy_bucket}-pipeline-${var.env}"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "codepipeline.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "codepipeline_policy" {
  name = "${var.deploy_bucket}-pipeline-${var.env}"
  role = "${aws_iam_role.codepipeline_role.id}"
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "*",
            "Resource": "*"
        }
    ]
}
EOF
}

resource "aws_iam_role" "codebuild_role" {
  name = "${var.deploy_bucket}-codebuild-${var.env}"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "codebuild.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "codebuild_policy" {
  name = "${var.deploy_bucket}-codebuild-${var.env}"
  role = "${aws_iam_role.codebuild_role.id}"
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "*",
            "Resource": "*"
        }
    ]
}
EOF
}

data "aws_caller_identity" "current" {}

resource "aws_codebuild_project" "codebuild" {
  name = "tf-codebuild-${var.deploy_bucket}-${var.env}"
  service_role = "${aws_iam_role.codebuild_role.arn}"

  artifacts {
    type = "CODEPIPELINE"
  }

  environment {
    compute_type = "BUILD_GENERAL1_SMALL"
    image = "${data.aws_caller_identity.current.account_id}.dkr.ecr.${var.region}.amazonaws.com/tf-ci:${var.build_image_name}"
    type = "LINUX_CONTAINER"

    environment_variable {
      name = "AWS_ACCESS_KEY_ID"
      value = "${var.access_key}"
    }

    environment_variable {
      name = "AWS_DEFAULT_REGION"
      value = "${var.region}"
    }

    environment_variable {
      name = "AWS_SECRET_ACCESS_KEY"
      value = "${var.secret_key}"
    }

    environment_variable {
      name = "BUCKET"
      value = "${var.deploy_bucket}"
    }

    environment_variable {
      name = "DISTRIBUTION_ID"
      value = "${var.distribution_id}"
    }
  }

  source {
    type = "CODEPIPELINE"
  }
}

resource "aws_codepipeline" "pipeline" {
  name = "${var.build_image_name}-pipeline-${var.env}"
  role_arn = "${aws_iam_role.codepipeline_role.arn}"

  artifact_store {
    location = "${aws_s3_bucket.artifacts.bucket}"
    type     = "S3"
  }

  stage {
    name = "Source"

    action {
      name             = "Source"
      category         = "Source"
      owner            = "ThirdParty"
      provider         = "GitHub"
      version          = "1"
      output_artifacts = ["source"]

      configuration = {
        Owner      = "${var.repo_owner}"
        Repo       = "${var.repo_name}"
        Branch     = "${var.branch}"
      }
    }
  }

  stage {
    name = "Build"

    action {
      name            = "Build"
      category        = "Build"
      owner           = "AWS"
      provider        = "CodeBuild"
      input_artifacts = ["source"]
      version         = "1"

      configuration = {
        ProjectName = "${aws_codebuild_project.codebuild.name}"
      }
    }
  }
}

