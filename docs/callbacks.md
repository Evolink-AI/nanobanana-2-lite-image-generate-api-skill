# Callback / Webhook

Use `callback_url` when you want EvoLink to notify your server when a task completes or fails.

## Requirements

- Callback URL must use HTTPS.
- Callback URL should be publicly reachable.
- Do not use private IP addresses or localhost URLs in production callbacks.
- Your endpoint should respond quickly and return a 2xx status.

## Example Request Field

```json
{
  "callback_url": "https://your-server.example.com/evolink-webhook"
}
```

## Example Callback Payload

```json
{
  "id": "task-unified-xxx",
  "status": "completed",
  "model": "gemini-3.1-flash-lite-image",
  "results": [
    "https://media.evolink.ai/..."
  ]
}
```

## Polling Fallback

Even when using callbacks, store the task ID so your system can poll `GET /v1/tasks/{task_id}` if callback delivery fails.
