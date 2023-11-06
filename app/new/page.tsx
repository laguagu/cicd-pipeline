import {
  Box,
  Button,
  Heading,
  Text,
  TextFieldInput,
  TextFieldRoot,
  TextFieldSlot,
} from "@radix-ui/themes";
import Link from "next/link";

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
      <Box className="flex justify-center pt-5 gap-x-4">
        <TextFieldRoot>
          <TextFieldInput placeholder="Todo title" />
        </TextFieldRoot>
        <Button color="blue">Add</Button>
      </Box>
    </Box>
  );
}
