#!/usr/bin/env bash
set -euo pipefail

PROMPT="${1:-Create a short Nanobanana 2 Lite Image Generation demo}"
if [ "${1:-}" = "--dry-run" ]; then
  PROMPT="Create a short Nanobanana 2 Lite Image Generation demo"
fi

if [ "${1:-}" = "--dry-run" ] || [ "${2:-}" = "--dry-run" ]; then
  jq -n \
    --arg endpoint "https://api.evolink.ai/v1/images/generations" \
    --arg model "gemini-3.1-flash-lite-image" \
    --arg prompt "$PROMPT" \
    --arg skill "nanobanana-2-lite-image" \
    --arg package "evolink-nanobanana-2-lite" \
    '{
      dry_run: true,
      method: "POST",
      endpoint: $endpoint,
      headers: {
        Authorization: "Bearer ${EVOLINK_API_KEY}",
        "Content-Type": "application/json",
        "X-EvoLink-Source": "skill",
        "X-EvoLink-Skill": $skill,
        "X-EvoLink-Package": $package,
        "X-EvoLink-Campaign": $skill,
        "X-EvoLink-Touchpoint": "first_run"
      },
      body: {
        model: $model,
        prompt: $prompt
      }
    }'
  exit 0
fi

: "${EVOLINK_API_KEY:?Set EVOLINK_API_KEY first}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
"${SCRIPT_DIR}/../examples/curl/complete-flow.sh" "$PROMPT"
