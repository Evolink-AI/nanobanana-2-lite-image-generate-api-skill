import os
import time
import requests

api_key = os.environ.get("EVOLINK_API_KEY")
if not api_key:
    raise SystemExit("Set EVOLINK_API_KEY first")

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json",
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
        headers={"Authorization": f"Bearer {api_key}"},
        timeout=30,
    )
    if poll_resp.status_code >= 400:
        raise SystemExit(f"Poll failed: {poll_resp.status_code} {poll_resp.text}")

    task = poll_resp.json()
    status = task.get("status")
    if status == "completed":
        print(task)
        result = (
            task.get("result_url")
            or task.get("url")
            or task.get("file_url")
            or task.get("output_url")
            or task.get("text")
            or task.get("result")
        )
        if not result and isinstance(task.get("results"), list) and task["results"]:
            first = task["results"][0]
            result = first.get("url") or first.get("text") if isinstance(first, dict) else first
        if not result and isinstance(task.get("result_data"), dict):
            result = task["result_data"].get("url") or task["result_data"].get("text")
        if not result and isinstance(task.get("result_data"), list) and task["result_data"]:
            first = task["result_data"][0]
            result = first.get("url") or first.get("text") if isinstance(first, dict) else first
        if result:
            print(f"RESULT={result}")
        raise SystemExit(0)
    if status == "failed":
        raise SystemExit(f"Task failed: {task}")
    time.sleep(3)

raise SystemExit(f"Timed out waiting for task {task_id}")
