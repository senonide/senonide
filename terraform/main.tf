resource "aws_s3_bucket" "senonide" {
  bucket        = "senonide.com"
  force_destroy = true
}

resource "aws_s3_bucket_website_configuration" "senonide" {
  bucket = aws_s3_bucket.senonide.id
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_acl" "senonide" {
  bucket = aws_s3_bucket.senonide.id
  acl    = "private"

  depends_on = [aws_s3_bucket_ownership_controls.senonide]
}

resource "aws_s3_bucket_ownership_controls" "senonide" {
  bucket = aws_s3_bucket.senonide.id

  rule {
    object_ownership = "ObjectWriter"
  }
}


resource "aws_s3_bucket_public_access_block" "senonide" {
  bucket                  = aws_s3_bucket.senonide.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "senonide" {
  bucket = aws_s3_bucket.senonide.id
  policy = <<POLICY
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::${aws_s3_bucket.senonide.bucket}/*"
        }
    ]
}
POLICY
}

resource "aws_s3_access_point" "senonide" {
  bucket = aws_s3_bucket.senonide.bucket
  name   = "senonide-accesspoint"

  public_access_block_configuration {
    block_public_acls       = false
    block_public_policy     = false
    ignore_public_acls      = false
    restrict_public_buckets = false
  }
}
