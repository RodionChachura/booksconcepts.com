output "zone_id" {
  value = "${aws_route53_zone.primary.zone_id}"
}

output "domain" {
  value = "${var.domain}"
}