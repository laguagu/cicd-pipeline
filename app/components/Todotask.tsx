"use client";
interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
  toggleTodo: (id: number, completed: boolean) => void;
}


export default function Todotask({
  id,
  title,
  completed,
  toggleTodo,
}: TodoProps) {
  const checkboxId = `todo-${id}`;
  return (
    <li className="flex space-x-2 items-center">
      <input
        type="checkbox"
        id={checkboxId}
        className="cursor-pointer peer"
        defaultChecked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={checkboxId}
        className="cursor-pointer
        peer-checked:text-zinc-400"
      >
        {title}
      </label>
    </li>
  );
}
