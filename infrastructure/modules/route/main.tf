resource "aws_route53_zone" "default" {
  name = "${var.domain}"
  comment = "${var.env} zone"

  tags {
    Enironment = "${var.env}"
  }
}

resource "aws_route53_record" "ns" {
  zone_id = "${var.global_zone_id}"
  name = "${var.domain}"
  type = "NS"
  ttl = "30"

  records = [
    "${aws_route53_zone.default.name_servers.0}",
    "${aws_route53_zone.default.name_servers.1}",
    "${aws_route53_zone.default.name_servers.2}",
    "${aws_route53_zone.default.name_servers.3}"
  ]
}
