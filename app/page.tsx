import prisma from "@/prisma/client";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <div>
      <header className="text-2xl">
        <h1>Todos</h1>
      </header>
      <ul className="">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
