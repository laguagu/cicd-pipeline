import prisma from "@/prisma/client";
import Link from "next/link";
import Todotask from "./components/Todotask";

function getTodos(){
  return prisma.todo.findMany();
}

async function toggleTodo(id: number, completed: boolean) {
  "use server";

  console.log(id, completed);
  await prisma.todo.update({
    where: { id },
    data: { completed },
  });

}

export default async function Home() {
  const todos = await getTodos();

  return (
    <div>
      <header className="m-6 flex justify-between item items-center">
        <h1 className="text-3xl">Todos</h1>
        <Link
          href="/new"
          className="flex border border-slate-600 rounded p-1 bg-cyan-900
          font-semibold hover:bg-cyan-600 hover:scale-110 ease-in-out duration-300"
        >
          Add todo
        </Link>
      </header>
      <ul className="m-6">
        {todos.map((todo:any) => (
          <Todotask key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}
