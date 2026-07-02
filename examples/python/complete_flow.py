import os
import time
import requests


def extract_result(task):
    for key in ("result_url", "url", "file_url", "output_url", "text", "result"):
        value = task.get(key)
        if value:
            return value
    for key in ("results", "result_data"):
        value = task.get(key)
        if isinstance(value, list) and value:
            first = value[0]
            if isinstance(first, dict):
                return first.get("url") or first.get("text")
            return first
        if isinstance(value, dict):
            return value.get("url") or value.get("text")
    return None


api_key = os.environ.get("EVOLINK_API_KEY")
if not api_key:
    raise SystemExit("Set EVOLINK_API_KEY first")

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json",
    "X-EvoLink-Source": "skill",
    "X-EvoLink-Skill": "nanobanana-2-lite-image",
    "X-EvoLink-Package": "evolink-nanobanana-2-lite",
    "X-EvoLink-Campaign": "nanobanana-2-lite-image",
    "X-EvoLink-Touchpoint": "first_run",
}

create_resp = requests.post(
    "https://api.evolink.ai/v1/images/generations",
    headers=headers,
    json={'model': 'gemini-3.1-flash-lite-image', 'prompt': 'Create a short demo with Nanobanana 2 Lite Image Generation'},
    timeout=60,
)

if create_resp.status_code >= 400:
    raise SystemExit(f"Create task failed: {create_resp.status_code} {create_resp.text}")

task = create_resp.json()
task_id = task.get("id")
if not task_id:
    raise SystemExit(f"Create task did not return id: {task}")

for _ in range(120):
    poll_resp = requests.get(
        f"https://api.evolink.ai/v1/tasks/{task_id}",
        headers=headers,
        timeout=30,
    )
    if poll_resp.status_code >= 400:
        raise SystemExit(f"Poll failed: {poll_resp.status_code} {poll_resp.text}")

    task = poll_resp.json()
    status = task.get("status")
    if status == "completed":
        print(task)
        result = extract_result(task)
        if result:
            print(f"RESULT={result}")
        raise SystemExit(0)
    if status == "failed":
        raise SystemExit(f"Task failed: {task}")
    time.sleep(3)

raise SystemExit(f"Timed out waiting for task {task_id}")
