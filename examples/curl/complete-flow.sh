#!/usr/bin/env bash
set -euo pipefail

: "${EVOLINK_API_KEY:?Set EVOLINK_API_KEY first}"

PROMPT="${1:-Create a short Nanobanana 2 Lite Image Generation demo}"
PAYLOAD=$(jq -n \
  --arg model "gemini-3.1-flash-lite-image" \
  --arg prompt "$PROMPT" \
  '{model: $model, prompt: $prompt}')

CREATE_RESPONSE=$(curl -sS --request POST \
  --url "https://api.evolink.ai/v1/images/generations" \
  --header "Authorization: Bearer ${EVOLINK_API_KEY}" \
  --header "Content-Type: application/json" \
  --data "$PAYLOAD")

TASK_ID=$(printf '%s' "$CREATE_RESPONSE" | jq -r '.id // empty')
if [ -z "$TASK_ID" ]; then
  printf 'Create task failed:\n%s\n' "$CREATE_RESPONSE" >&2
  exit 1
fi

for _ in $(seq 1 120); do
  TASK=$(curl -sS --request GET \
    --url "https://api.evolink.ai/v1/tasks/${TASK_ID}" \
    --header "Authorization: Bearer ${EVOLINK_API_KEY}")

  STATUS=$(printf '%s' "$TASK" | jq -r '.status // empty')
  if [ "$STATUS" = "completed" ]; then
    printf '%s\n' "$TASK" | jq .
    RESULT=$(printf '%s' "$TASK" | jq -r '.result_url // .url // .file_url // .output_url // .text // .result // .results[0] // .results[0].url // .results[0].text // .result_data.url // .result_data.text // empty')
    if [ -n "$RESULT" ]; then
      printf 'RESULT=%s\n' "$RESULT"
    fi
    exit 0
  fi
  if [ "$STATUS" = "failed" ]; then
    printf 'Task failed:\n%s\n' "$TASK" >&2
    exit 1
  fi
  sleep 3
done

printf 'Timed out waiting for task %s\n' "$TASK_ID" >&2
exit 1
