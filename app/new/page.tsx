import { Box, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function NewTodo() {
  return (
    <Box className="mt-4">
      <Heading>
      <Link href="/" className="m-7 transition duration-200 ease-in-out hover:text-blue-100">
          <Text size="4">Back to Todos</Text>
        </Link>
        <Box className="flex flex-col items-center p-12">
          <Text color="blue">Add new todo</Text>
        </Box>
      </Heading>
    </Box>
  );
}
