# Objective 1/2/3 Completion Audit

Date: 2026-07-01T15:16:38Z

Repository: `cheercheung/nanobanana-2-lite-image-generate-api-skill`
Package target: `evolink-nanobanana-2-lite@1.0.2`

## Requested Requirements

1. Agent skill must be placed first.
2. Replace the image with the provided banner file.
3. Complete all translations instead of leaving untranslated skeletons.
4. Inspect why the previous audit missed these issues and improve the audit.

## Result

Current verdict: `passed before publication`

- P0: None
- P1: None
- P2: None

## Evidence

### 1. Agent Skill First

Status: `passed`

Evidence:

- `README.md` now places `<a id="agent-skill-first"></a>` before `<a id="api-quick-start"></a>`.
- All localized READMEs use the same fixed anchor order.
- Installation and Agent Auto-Install appear before API Quick Start.

Commands used:

```bash
python3 - <<'PY'
from pathlib import Path
for f in Path('.').glob('README*.md'):
    text = f.read_text()
    assert text.index('<a id="agent-skill-first"></a>') < text.index('<a id="api-quick-start"></a>')
PY
```

### 2. Banner Replaced

Status: `passed`

Evidence:

- Source image: `/Users/cheercheung/Desktop/banner_files/1e03c14f-3ce7-4c54-b2f5-fc2b4c320322.png`
- Output image: `assets/banner.jpg`
- `assets/banner.jpg` is a real 1774 x 887 JPEG, not the previous 582-byte placeholder.
- The npm package files now include `assets/banner.jpg`.

Commands used:

```bash
file assets/banner.jpg
npm pack --dry-run
```

### 3. All Translations Completed

Status: `passed`

Evidence:

- Required localized files exist:
  - `README.es.md`
  - `README.pt.md`
  - `README.ja.md`
  - `README.ko.md`
  - `README.de.md`
  - `README.fr.md`
  - `README.tr.md`
  - `README.zh-TW.md`
  - `README.zh-CN.md`
  - `README.ru.md`
- No localized README contains `TODO` or `translate prose`.
- All localized READMEs preserve the same fixed anchor order and menu targets.
- Commands, JSON, model IDs, endpoint paths, `npx`, and `EVOLINK_API_KEY` remain unchanged.

Commands used:

```bash
rg -n "TODO: translate|TODO|translate prose" README*.md
python3 - <<'PY'
from pathlib import Path
import re
anchors = [
    'menu', 'agent-skill-first', 'installation', 'agent-auto-install',
    'getting-an-api-key', 'api-quick-start', 'full-first-run-flow',
    'api-reference', 'showcase', 'troubleshooting', 'compatibility',
    'community', 'license'
]
for f in Path('.').glob('README*.md'):
    text = f.read_text()
    assert re.findall(r'<a id="([^"]+)"></a>', text) == anchors
PY
```

### 4. Audit Improved

Status: `passed`

Root cause of previous audit miss:

- It checked that localized README files existed, but did not reject translation TODO skeletons.
- It checked that `assets/banner.jpg` existed, but did not reject tiny placeholder images.
- It checked required README sections existed, but did not enforce Agent Skill before API Quick Start.
- It did not validate fixed menu anchors across localized README files.
- It did not require all four installation paths to be visible in README.
- It did not warn when npm package files excluded `assets/banner.jpg`.

Fix applied to `scripts/model_repo_orchestrator.py`:

- Rejects `assets/banner.jpg` below 100 KB as likely placeholder.
- Requires stable Agent-first and API anchors, and verifies Agent Skill precedes API Quick Start.
- Validates README menu target order.
- Requires OpenClaw, npm, silent `-y`, explicit `--path`, manual clone, and Agent Auto-Install install paths.
- Requires GitHub community health files including `CODE_OF_CONDUCT.md`, classic issue template, issue form config, and PR template.
- Rejects localized README files containing TODO/translation skeleton markers.
- Validates localized fixed anchors and menu targets.
- Warns if npm package files exclude `assets/banner.jpg`.

Verification commands:

```bash
python3 -m py_compile scripts/model_repo_orchestrator.py
python3 scripts/validate_framework.py
python3 scripts/model_repo_orchestrator.py review --repo /Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill --pipeline skill-api --intake /Users/cheercheung/agent/model-repo-pipeline-agent-transfer/intakes/nanobanana-2-lite-image-generate.md
```

## Remaining Publication Step

The local repo passes the improved audit before publication. The next required step is to commit, push, publish `evolink-nanobanana-2-lite@1.0.2`, and then re-run GitHub/npm/npx verification against remote state.
