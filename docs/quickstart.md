# Quickstart

This quickstart runs one complete Nanobanana 2 Lite Image Generation flow: create a task, poll until completion, and print the final result URL/text/file.

## 1. Set API Key

```bash
export EVOLINK_API_KEY="your_key_here"
```

If you need a key, open:

https://evolink.ai/dashboard/keys?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image

## 2. Run The Complete Flow

```bash
bash examples/curl/complete-flow.sh "Create a blue ceramic cup on a white table"
```

The example checks `EVOLINK_API_KEY`, creates the task with attribution headers, polls `/v1/tasks/{task_id}`, stops on `completed` or `failed`, and prints `RESULT=<value>` when a final result is present.

## 3. Preview Without Spending Credits

```bash
bash scripts/nanobanana-2-lite-image.sh "Create a blue ceramic cup on a white table" --dry-run
```

Dry-run mode prints the JSON request payload and attribution headers. It does not call the API or create an image task.

## 4. Required Attribution Headers

All first-run examples include:

- `X-EvoLink-Source: skill`
- `X-EvoLink-Skill: nanobanana-2-lite-image`
- `X-EvoLink-Package: evolink-nanobanana-2-lite`
- `X-EvoLink-Campaign: nanobanana-2-lite-image`
- `X-EvoLink-Touchpoint: first_run`

## 5. Result Handling

Generated media URLs may expire. Download or copy final assets into your own storage promptly after the task reaches `completed`.
