interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

export default function Todotask({ id, title, completed }: TodoProps) {
  const checkboxId = `todo-${id}`;
  return (
    <li className="flex space-x-2 items-center">
      <input type="checkbox" id={checkboxId} className="cursor-pointer peer" />
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
