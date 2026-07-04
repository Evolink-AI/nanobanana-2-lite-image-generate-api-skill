# API Reference

## Create Task

- Method: `POST`
- URL: `https://api.evolink.ai/v1/images/generations`
- Model: `gemini-3.1-flash-lite-image`

## Authentication

Use `Authorization: Bearer ${EVOLINK_API_KEY}`.

## Required Headers

```http
Authorization: Bearer ${EVOLINK_API_KEY}
Content-Type: application/json
X-EvoLink-Source: skill
X-EvoLink-Skill: nanobanana-2-lite-image
X-EvoLink-Package: evolink-nanobanana-2-lite
X-EvoLink-Campaign: nanobanana-2-lite-image
X-EvoLink-Touchpoint: first_run
```

## Request Body

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `model` | string | yes | Use `gemini-3.1-flash-lite-image`. |
| `prompt` | string | yes | Text instruction for generation or editing. Maximum 2000 tokens. |
| `size` | string | no | Aspect ratio. Defaults to `auto`; accepted examples include `1:1`, `16:9`, `9:16`, `4:3`, `3:4`, `3:2`, `2:3`, and `21:9`. |
| `quality` | string | no | Image quality. Default supported value is `1K`. |
| `image_urls` | string array | no | Reference image URLs for image-to-image or editing. Up to 14 images, each under 20MB, using `.jpeg`, `.jpg`, `.png`, or `.webp`. |
| `model_params` | object | no | Model-specific extension parameters. |
| `callback_url` | string | no | HTTPS callback URL for completion, failure, or cancellation. If omitted, poll the task endpoint. |

## Example Create Request

```bash
curl --request POST \
  --url "https://api.evolink.ai/v1/images/generations" \
  --header "Authorization: Bearer ${EVOLINK_API_KEY}" \
  --header "Content-Type: application/json" \
  --header "X-EvoLink-Source: skill" \
  --header "X-EvoLink-Skill: nanobanana-2-lite-image" \
  --header "X-EvoLink-Package: evolink-nanobanana-2-lite" \
  --header "X-EvoLink-Campaign: nanobanana-2-lite-image" \
  --header "X-EvoLink-Touchpoint: first_run" \
  --data '{
    "model": "gemini-3.1-flash-lite-image",
    "prompt": "Create a blue ceramic cup on a white table",
    "size": "1:1",
    "quality": "1K"
  }'
```

## Query Task

- Method: `GET`
- URL: `https://api.evolink.ai/v1/tasks/{task_id}`

```bash
curl --request GET \
  --url "https://api.evolink.ai/v1/tasks/${TASK_ID}" \
  --header "Authorization: Bearer ${EVOLINK_API_KEY}" \
  --header "X-EvoLink-Source: skill" \
  --header "X-EvoLink-Skill: nanobanana-2-lite-image" \
  --header "X-EvoLink-Package: evolink-nanobanana-2-lite" \
  --header "X-EvoLink-Campaign: nanobanana-2-lite-image" \
  --header "X-EvoLink-Touchpoint: first_run"
```

## Final Result

Poll until `status` is `completed`, then extract the final result from the first populated field your response contains:

- `result_url`
- `url`
- `file_url`
- `output_url`
- `text`
- `result`
- `results[0]`
- `results[0].url`
- `results[0].text`
- `result_data.url`
- `result_data.text`

If `status` is `failed`, stop and inspect `error.code` and `error.message`. Do not blindly resubmit after a task has already been accepted.

## Runnable Examples

- cURL: `examples/curl/complete-flow.sh`
- Python: `examples/python/complete_flow.py`
- JavaScript: `examples/javascript/complete-flow.mjs`
