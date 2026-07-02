# Error Handling

## Common Errors

| Error | Likely Cause | Fix |
|---|---|---|
| `401 Unauthorized` | Missing or invalid `EVOLINK_API_KEY` | Create a new key at https://evolink.ai/dashboard/keys?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image and set `export EVOLINK_API_KEY="..."` |
| `402 Payment Required` | Insufficient account balance or credits | Add credits from https://evolink.ai/dashboard/keys?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image and retry without changing the request payload |
| `400 Bad Request` | Invalid model, parameter, URL, or JSON body | Check model ID, required fields, and accepted values |
| `404 Not Found` | Unknown task ID | Store the task ID returned by the create request |
| `429 Too Many Requests` | Rate limit or concurrency limit | Retry with backoff or reduce concurrency |
| `failed` task status | Provider-side generation failure or invalid input | Read `error.code` and `error.message`, then retry with corrected input |

## Recommended Client Behavior

- Check HTTP status before parsing success data.
- Print the API error body during development.
- Stop polling when status is `completed` or `failed`.
- Use a timeout to avoid infinite polling loops.
- Use exponential backoff for repeated transient failures.
