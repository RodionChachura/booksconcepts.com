terraform {
  backend "s3" {
    bucket = "infrastructure-remote-state"
    key = "booksconcepts/global/route.tfstate"
    region = "eu-central-1"
  }
}

resource "aws_route53_zone" "primary" {
  name = "${var.domain}"
  comment = "primary hosted zone for booksconcepts.com"
}