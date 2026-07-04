# Task Lifecycle

Nanobanana 2 Lite Image Generation is asynchronous. A create request returns a task ID first; clients must poll or receive a callback before reading the final media result.

## Statuses

| Status | Meaning | Client action |
|---|---|---|
| `pending` | Task accepted and queued. | Store the task ID and continue polling. |
| `processing` | Provider is generating or editing the image. | Continue polling with a delay. |
| `completed` | Final result is available. | Extract and save the final URL/text/file immediately. |
| `failed` | Task did not complete. | Stop polling and inspect `error.code` and `error.message`. |

## Polling Flow

1. Send `POST /v1/images/generations`.
2. Store the returned `id`.
3. Poll `GET /v1/tasks/{task_id}` every few seconds.
4. Stop when status is `completed` or `failed`.
5. Enforce a timeout or max polling attempts; the bundled examples use 120 attempts with a 3-second delay.

## Timeout Behavior

A local polling timeout does not prove the remote task failed. Keep the task ID, avoid blind resubmission, and check the dashboard or poll again later. Resubmitting after the first task was accepted can spend credits twice.

## Callback Flow

If you provide `callback_url`, EvoLink can notify your HTTPS endpoint when the task completes or fails. Still store the task ID and keep polling as a fallback in case callback delivery fails.

## Result Persistence

Generated media URLs may expire. Once a task reaches `completed`, download the final asset or copy the result into your own durable storage.
