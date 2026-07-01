# Response Schema

## Create Task Response

```json
{
  "id": "task-unified-xxx",
  "created": 1757165031,
  "object": "image.generation.task",
  "model": "gemini-3.1-flash-lite-image",
  "status": "pending",
  "progress": 0,
  "task_info": {
    "can_cancel": true,
    "estimated_time": 45
  },
  "type": "image",
  "usage": {
    "billing_rule": "per_call",
    "credits_reserved": 8.7,
    "user_group": "default"
  }
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
