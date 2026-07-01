# Pricing

EvoLink returns billing information in the task creation response.

The official Nanobanana 2 Lite Image Generation example shows:

```json
{
  "usage": {
    "billing_rule": "per_call",
    "credits_reserved": 8.7,
    "user_group": "default"
  }
}
```

Use the returned `usage` object and your EvoLink dashboard as the source of truth for the current account-specific charge. For production systems, log the task ID, billing rule, reserved credits, and final task status so billing can be reconciled after completion.
