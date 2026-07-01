#!/usr/bin/env bash
set -euo pipefail

if [ "${1:-}" = "--dry-run" ] || [ "${2:-}" = "--dry-run" ]; then
  printf 'DRY_RUN: would call https://api.evolink.ai/v1/images/generations with model gemini-3.1-flash-lite-image\n'
  exit 0
fi

: "${EVOLINK_API_KEY:?Set EVOLINK_API_KEY first}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
"${SCRIPT_DIR}/../examples/curl/complete-flow.sh" "${1:-Create a short Nanobanana 2 Lite Image Generation demo}"
