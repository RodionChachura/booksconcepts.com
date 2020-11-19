terraform {
  backend "s3" {
    bucket = "infrastructure-remote-state"
    key = "booksconcepts/global/ci-repository.tfstate"
    region = "eu-central-1"
  }
}

resource "aws_ecr_repository" "ci" {
  name = "tf-ci"
}

resource "aws_ecr_repository_policy" "ci-policy" {
  repository = aws_ecr_repository.ci.name

  policy = <<EOF
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Sid": "everybody",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "ecr:GetDownloadUrlForLayer",
                "ecr:BatchGetImage",
                "ecr:BatchCheckLayerAvailability",
                "ecr:PutImage",
                "ecr:InitiateLayerUpload",
                "ecr:UploadLayerPart",
                "ecr:CompleteLayerUpload",
                "ecr:DescribeRepositories",
                "ecr:GetRepositoryPolicy",
                "ecr:ListImages",
                "ecr:DescribeImages",
                "ecr:DeleteRepository",
                "ecr:BatchDeleteImage",
                "ecr:SetRepositoryPolicy",
                "ecr:DeleteRepositoryPolicy",
                "ecr:GetLifecyclePolicy",
                "ecr:PutLifecyclePolicy",
                "ecr:DeleteLifecyclePolicy",
                "ecr:GetLifecyclePolicyPreview",
                "ecr:StartLifecyclePolicyPreview"
            ]
        }
    ]
}
EOF
}

