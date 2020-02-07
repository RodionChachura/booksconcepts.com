output "distribution_id" {
  value = "${module.cloudfront.distribution_id}"
}

output "build_bucket" {
  value = "${module.cloudfront.build_bucket}"
}