import React, { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  IconButton,
  useColorMode,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const AppHeader = ({ todos, setSearchResult }) => {
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchTerm, setSearchTerm] = useState("");

  const searchTodos = (e) => {
    e.preventDefault();
    const searchInput = e.target.value;
    setSearchTerm(searchInput);
    if (searchInput !== "") {
      const searchTodos = todos.filter((todo) => {
        return todo.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      setSearchResult(searchTodos);
    } else {
      resetSearchResult();
    }
  };

  const resetSearchResult = () => {
    setSearchResult([]);
    setSearchTerm("");
  };

  const chechSearchTerm = () => {
    if (searchTerm === "" || "undefined") {
      toast({
        title: "Search Term Error",
        description: "Please enter any word to search",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <HStack
        bg="blue.300"
        height={150}
        width="100%"
        alignItems="center"
        justifyContent="space-around"
      >
        <Heading
          shadow="2xl"
          fontWeight="bold"
          pl="10"
          as="h1"
          size="xl"
          borderRadius={15}
          bgGradient="linear(to-r,red,orange,yellow,blue,indigo)"
          bgClip="text"
          p="5"
        >
          My TODO App
        </Heading>

        <Flex with="30%">
          <InputGroup>
            <Input
              type="text"
              value={searchTerm}
              placeholder="Search TODO"
              _placeholder={{ opacity: 0.4, color: "black" }}
              onChange={searchTodos}
            />
            <InputRightElement
              children={
                <IconButton
                  _hover={{ bg: "transparent" }}
                  _focus={{ border: "none", bg: "transparent" }}
                  bg="transparent"
                  icon={<AiOutlineCloseCircle />}
                  onClick={resetSearchResult}
                />
              }
            />
          </InputGroup>

          {/* search button */}
          <Button
            type="submit"
            p="5"
            ml="10"
            colorScheme="green"
            _focus={{ border: "none" }}
            onClick={chechSearchTerm}
          >
            Search
          </Button>

          <IconButton
            icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
            isRound="true"
            size="lg"
            alignSelf="flex-end"
            onClick={toggleColorMode}
            bg="black.100"
            ml="5"
            _hover={{ bg: "blue.100" }}
          />
        </Flex>
      </HStack>
    </>
  );
};

export default AppHeader;
