# Security Policy

## Supported Versions

Security fixes target the latest published npm version.

## Reporting a Vulnerability

Do not open a public issue for secrets, authentication bypasses, or exploitable installer behavior.

Report vulnerabilities by contacting the repository owner through GitHub or EvoLink support. Include:

- Affected package version.
- Minimal reproduction steps.
- Whether an API key, generated asset URL, or local skill path is exposed.
- Suggested mitigation if known.

## Handling Secrets

Never commit EvoLink API keys. The examples and installer expect keys through `EVOLINK_API_KEY`.

If a key is exposed:

1. Revoke it in the EvoLink dashboard.
2. Generate a new key.
3. Remove the leaked value from local files and shell history where possible.
