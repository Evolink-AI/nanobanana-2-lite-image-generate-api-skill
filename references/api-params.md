# API Parameters

| Parameter | Required | Notes |
|---|---:|---|
| `model` | yes | `gemini-3.1-flash-lite-image` |
| `prompt` | yes | Prompt describing the image to generate, or describing how to edit the input image. Maximum 2000 tokens. |
| `size` | no | Aspect ratio. Default: `auto`. Supported values include `auto`, `1:1`, `1:4`, `4:1`, `1:8`, `8:1`, `2:3`, `3:2`, `3:4`, `4:3`, `4:5`, `5:4`, `9:16`, `16:9`, `21:9`. |
| `quality` | no | Image quality. Default and supported value: `1K`. |
| `image_urls` | no | Reference image URL list for image-to-image and image editing. Maximum 14 images, each under 20MB. Supported formats: `.jpeg`, `.jpg`, `.png`, `.webp`. |
| `model_params` | no | Model extension parameters. |
| `callback_url` | no | HTTPS callback URL after task completion, failure, or cancellation. Must not point to localhost/private IPs. |
