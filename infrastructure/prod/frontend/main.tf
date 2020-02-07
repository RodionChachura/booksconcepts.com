terraform {
  backend "s3" {
    bucket = "infrastructure-remote-state"
    key = "booksconcepts/prod/frontend.tfstate"
    region = "eu-central-1"
  }
}

data "terraform_remote_state" "route" {
  backend = "s3"
  config = {
    bucket = "infrastructure-remote-state"
    key = "booksconcepts/global/route.tfstate"
    region = "eu-central-1"
  }
}

module "frontend" {
  source = "../../modules/certificate"

  domain = "${data.terraform_remote_state.route.outputs.domain}"
  zone_id ="${data.terraform_remote_state.route.outputs.zone_id}"
}

module "cloudfront" {
  source = "../../modules/cloudfront"
  
  env = "prod"
  certificate_arn = "${module.frontend.certificate_arn}"
  domain = "${data.terraform_remote_state.route.outputs.domain}"
  zone_id = "${data.terraform_remote_state.route.outputs.zone_id}"
}

module "pipeline" {
  source = "../../modules/frontend-pipeline"

  region = "${var.region}"
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"

  env = "prod"
  deploy_bucket = "${module.cloudfront.build_bucket}"
  distribution_id = "${module.cloudfront.distribution_id}"
  repo_name = "${var.repo_name}"
  repo_owner = "${var.repo_owner}"
  branch = "${var.branch}"
}

