# Contributing

This repository is a focused EvoLink API and agent skill package.

## Scope

Accepted contributions:

- Fix API examples, response parsing, or task polling behavior.
- Improve documentation for EvoLink Nanobanana 2 Lite Image Generation.
- Improve agent installation compatibility for Claude Code, Codex, OpenClaw, and Hermes.
- Fix security, error handling, or packaging issues.

Out of scope:

- Adding unrelated model APIs.
- Replacing the EvoLink endpoint with another provider.
- Committing API keys, generated private files, or local agent settings.

## Local Checks

Before opening a pull request:

```bash
npm pack --dry-run
npx -y . --version
```

For API behavior changes, run one real smoke test with `EVOLINK_API_KEY` and include the task ID plus final result URL in the pull request.

## Pull Requests

Use a small, reviewable patch. Include:

- What changed.
- How it was tested.
- Any API task IDs or npm packaging evidence.
- Whether docs, examples, and the skill installer still agree.
