import React from "react";
import {
  HStack,
  Text,
  IconButton,
  Flex,
  Badge,
  Spacer,
} from "@chakra-ui/react";

import { FaTrashAlt } from "react-icons/fa";

const ToDoList = ({ todos, deleteTodo, searchResult }) => {
  if (!todos.length) {
    return (
      <>
        <Flex pt={10}>
          <Badge colorScheme="green" p={10} borderRadius="lg">
            No ToDo's Found...
          </Badge>
        </Flex>
      </>
    );
  }

  if (searchResult.length) {
    return (
      <>
        {searchResult.map((search) => {
          return (
            <HStack
              key={search.id}
              borderRadius="12"
              width="60%"
              bgGradient="linear(to-r,red.400,orange,yellow.300,blue.400,indigo)"
              justifyContent="space-between"
            >
              <Text fontWeight="bold" p="5">
                {search.title}
              </Text>
            </HStack>
          );
        })}
      </>
    );
  }

  return (
    <>
      {todos.map((todo) => {
        return (
          <HStack
            key={todo.id}
            borderRadius="12"
            width="60%"
            bgGradient="linear(to-r,red.400,orange,yellow.300,blue.400,indigo)"
            justifyContent="space-between"
          >
            <Text fontWeight="bold" p="5">
              {todo.title}
            </Text>
            <Spacer />
            <IconButton
              onClick={(e) => deleteTodo(todo.id)}
              color="red.600"
              bg="transparent"
              pr="5"
              icon={<FaTrashAlt />}
              _hover={{ bg: "transparent", color: "red" }}
              _focus={{ border: "none", bg: "transparent" }}
            />
          </HStack>
        );
      })}
    </>
  );
};

export default ToDoList;
