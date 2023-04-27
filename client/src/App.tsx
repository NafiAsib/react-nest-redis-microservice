import { useEffect, useState } from "react";

import Form from "./components/Form";
import Tasks from "./components/Tasks";

import { createTask, getTasks } from "./api";

type Task = {
  id: number;
  description: string;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onSubmit = async (task: string) => {
    try {
      await createTask(task);
      const tasks = await getTasks();
      setTasks(tasks);
    } catch (error) {
      console.error("Error creating task: ", error);
    }
  };

  useEffect(() => {
    getTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  return (
    <main className="bg-gradient-to-r from-zinc-500 to-zinc-700 h-screen">
      <div className="max-w-4xl flex mx-auto justify-between">
        <section>
          <Form onSubmit={onSubmit} />
        </section>
        <section>
          <Tasks tasks={tasks} />
        </section>
      </div>
    </main>
  );
}

export default App;
