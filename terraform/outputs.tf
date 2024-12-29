output "website_url" {
  description = "The URL of the website"
  value       = aws_s3_bucket.senonide.website_endpoint
}

output "bucket_name" {
  description = "The name of the S3 bucket"
  value       = aws_s3_bucket.senonide.bucket
}
