import { useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

const taskData = [
  { id: 1, description: "Task 1" },
  { id: 2, description: "Task 2" },
  { id: 3, description: "Task 3" },
];

type Task = {
  id: number;
  description: string;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>(taskData);

  const onSubmit = (task: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      description: task,
    };
    setTasks([...tasks, newTask]);
  };

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
