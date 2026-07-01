# Response Schema

## Create Task Response

```json
{
  "id": "task-unified-xxx",
  "object": "task",
  "model": "gemini-3.1-flash-lite-image",
  "status": "pending",
  "progress": 0,
  "type": "media"
}
```

## Completed Task Response

```json
{
  "id": "task-unified-xxx",
  "status": "completed",
  "progress": 100,
  "model": "gemini-3.1-flash-lite-image",
  "results": [
    "https://media.evolink.ai/..."
  ]
}
```

## Failed Task Response

```json
{
  "id": "task-unified-xxx",
  "status": "failed",
  "error": {
    "code": "invalid_request",
    "message": "Explain what went wrong."
  }
}
```

## Result URL Expiry

Generated media URLs may expire. Download or copy final assets into your own storage promptly after completion.
