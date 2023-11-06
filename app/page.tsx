import prisma from "@/prisma/client";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <div>
      <header>
        <h1 className="text-3xl m-6">Todos</h1>
        <Link href="/new" className="flex">New todo</Link>
      </header>
      <ul className="m-6">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
