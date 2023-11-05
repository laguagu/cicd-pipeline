import prisma from "@/prisma/client"

  // Find all todos
function getTodos() {
  return prisma.todo.findMany()
}

export default async function Home() {

  const todos = await getTodos()
  
  return (
    <main>
     <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
     </ul>
    </main>
  )
}
