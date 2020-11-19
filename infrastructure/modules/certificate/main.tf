provider "aws" {
  region = "us-east-1"
  alias = "virginia"
}

resource "aws_acm_certificate" "domain" {
  provider = "aws.virginia"
  domain_name = var.domain
  validation_method = "DNS"
}

resource "aws_route53_record" "cert_validation" {
  name = "${tolist(aws_acm_certificate.domain.domain_validation_options)[0].resource_record_name}"
  type = "${tolist(aws_acm_certificate.domain.domain_validation_options)[0].resource_record_type}"
  records = ["${tolist(aws_acm_certificate.domain.domain_validation_options)[0].resource_record_value}"]
  zone_id = var.zone_id
  ttl = 60
}

resource "aws_acm_certificate_validation" "cert_validation" {
  provider = "aws.virginia"
  certificate_arn = "${aws_acm_certificate.domain.arn}"
  validation_record_fqdns = ["${aws_route53_record.cert_validation.fqdn}"]
}
