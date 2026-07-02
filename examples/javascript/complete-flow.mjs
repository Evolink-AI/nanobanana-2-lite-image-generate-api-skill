const apiKey = process.env.EVOLINK_API_KEY;
if (!apiKey) {
  throw new Error("Set EVOLINK_API_KEY first");
}

async function requestJson(url, options = {}) {
  const response = await fetch(url, options);
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(data)}`);
  }
  return data;
}

function extractResult(task) {
  for (const key of ["result_url", "url", "file_url", "output_url", "text", "result"]) {
    if (task[key]) return task[key];
  }
  for (const key of ["results", "result_data"]) {
    const value = task[key];
    if (Array.isArray(value) && value.length > 0) {
      const first = value[0];
      return typeof first === "object" ? (first.url || first.text) : first;
    }
    if (value && typeof value === "object") {
      return value.url || value.text;
    }
  }
  return null;
}

const task = await requestJson("https://api.evolink.ai/v1/images/generations", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
    "X-EvoLink-Source": "skill",
    "X-EvoLink-Skill": "nanobanana-2-lite-image",
    "X-EvoLink-Package": "evolink-nanobanana-2-lite",
    "X-EvoLink-Campaign": "nanobanana-2-lite-image",
    "X-EvoLink-Touchpoint": "first_run"
  },
  body: JSON.stringify({
  "model": "gemini-3.1-flash-lite-image",
  "prompt": "Create a short demo with Nanobanana 2 Lite Image Generation"
})
});

if (!task.id) {
  throw new Error(`Create task did not return id: ${JSON.stringify(task)}`);
}

for (let attempt = 0; attempt < 120; attempt += 1) {
  const current = await requestJson(`https://api.evolink.ai/v1/tasks/${task.id}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "X-EvoLink-Source": "skill",
      "X-EvoLink-Skill": "nanobanana-2-lite-image",
      "X-EvoLink-Package": "evolink-nanobanana-2-lite",
      "X-EvoLink-Campaign": "nanobanana-2-lite-image",
      "X-EvoLink-Touchpoint": "first_run"
    }
  });

  if (current.status === "completed") {
    console.log(JSON.stringify(current, null, 2));
    const result = extractResult(current);
    if (result) {
      console.log(`RESULT=${result}`);
    }
    process.exit(0);
  }
  if (current.status === "failed") {
    throw new Error(`Task failed: ${JSON.stringify(current)}`);
  }
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

throw new Error(`Timed out waiting for task ${task.id}`);
