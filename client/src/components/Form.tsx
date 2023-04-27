import { useState } from "react";

type Props = {
  onSubmit: (task: string) => void;
};

const Form = ({ onSubmit }: Props) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="large-input"
        className="block mb-2 text-2xl font-medium text-white"
      >
        Input task name
      </label>
      <input
        type="text"
        id="large-input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-50 dark:focus:border-blue-500"
      />
    </form>
  );
};

export default Form;
