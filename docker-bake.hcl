variable "GITHUB_REF_NAME" {
  default = "latest"
}

variable "GITHUB_SHA" {
  default = "latest"
}

target "default" {
  context = "."
  contexts = {
    node = "docker-image://node:22.8.0-alpine3.20"
  }
  args = {
    GIT_COMMIT = "${GITHUB_SHA}"
  }
  dockerfile = "Dockerfile"
  tags = ["ghcr.io/semaforinformatik/webtens:${GITHUB_REF_NAME}", "ghcr.io/semaforinformatik/webtens:latest"]
  cache-from = ["type=gha,scope=webtens"]
  cache-to = ["type=gha,mode=max,scope=webtens"]
}

