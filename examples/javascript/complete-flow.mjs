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

const task = await requestJson("https://api.evolink.ai/v1/images/generations", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json"
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
    headers: { Authorization: `Bearer ${apiKey}` }
  });

  if (current.status === "completed") {
    console.log(JSON.stringify(current, null, 2));
    let result = current.result_url || current.url || current.file_url || current.output_url || current.text || current.result;
    if (!result && Array.isArray(current.results) && current.results.length > 0) {
      const first = current.results[0];
      result = typeof first === "object" ? (first.url || first.text) : first;
    }
    if (!result && current.result_data) {
      if (Array.isArray(current.result_data) && current.result_data.length > 0) {
        const first = current.result_data[0];
        result = typeof first === "object" ? (first.url || first.text) : first;
      } else {
        result = current.result_data.url || current.result_data.text;
      }
    }
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
