import { Input, Flex, Button, HStack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";

const TodoAdd = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value === "" || "undefined") {
      toast({
        title: "Todo Error",
        description: "Please enter todo to add",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      const newTodo = {
        id: nanoid(),
        title: todo,
      };

      setTodos([...todos, newTodo]);
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      setTodo("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <HStack>
          <Flex padding="10">
            <Input
              _placeholder={{ color: "blue.600" }}
              borderColor="blue.400"
              type="text"
              placeholder="Enter TODO"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <Button
              type="submit"
              ml="5"
              colorScheme="green"
              _focus={{ border: "none" }}
            >
              Add
            </Button>
          </Flex>
        </HStack>
      </form>
    </>
  );
};
export default TodoAdd;
