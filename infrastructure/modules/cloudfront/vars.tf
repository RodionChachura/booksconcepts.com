variable "env" {}
variable "certificate_arn" {}
variable "domain" {}
variable "zone_id" {}

variable "bucket_name" {
  default = "tf-booksconcepts-frontend"
}

variable "origin_id" {
  default = "tf-booksconcepts"
}