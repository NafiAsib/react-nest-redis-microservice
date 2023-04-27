type Task = {
  id: number;
  description: string;
};

const Tasks = ({ tasks }: { tasks: Task[] }) => {
  return (
    <>
      <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
        List of tasks:
      </h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {tasks.map((task) => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
