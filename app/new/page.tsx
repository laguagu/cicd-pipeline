import prisma from "@/prisma/client";
import {
  Box,
  Button,
  Heading,
  Text,
  TextFieldInput,
  TextFieldRoot,
} from "@radix-ui/themes";
import Link from "next/link";
import { redirect } from "next/navigation";


async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")
  if (typeof title !== "string" || title.length <= 0) {
    throw new Error("Invalid title!")
  }

  await prisma.todo.create({
    data: {
      title: title,
      completed: false
    }
  })
  redirect("/")
}

export default function NewTodo() {
  return (
    <Box className="mt-4">
      <Heading>
        <Link
          href="/"
          className="m-7 transition duration-200 ease-in-out hover:text-blue-100"
        >
          <Text size="4">Back to Todos</Text>
        </Link>
        <Box className="flex flex-col items-center pt-10">
          <Text color="blue">Add new todo</Text>
        </Box>
      </Heading>
      <form action={createTodo} className="flex justify-center pt-5 gap-x-4">
        <TextFieldRoot>
          <TextFieldInput placeholder="Todo title" name="title"/>
        </TextFieldRoot>
        <Button color="blue" type="submit">Add</Button>
      </form>
    </Box>
  );
}
