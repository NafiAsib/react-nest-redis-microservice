const baseUrl = "http://localhost:3000";

export const getTasks = async () => {
  const res = await fetch(`${baseUrl}/tasks`);
  return await res.json();
};

export const createTask = async (task: string) => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task }),
  });
  return await res.json();
};
