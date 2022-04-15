import ToDoList from "./components/ToDoList";
import { VStack } from "@chakra-ui/react";
import TodoAdd from "./components/TodoAdd";
import { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  return (
    <>
      <VStack width="100vw">
        <AppHeader setSearchResult={setSearchResult} todos={todos} />
        <TodoAdd setTodos={setTodos} todos={todos} />
        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          searchResult={searchResult}
        />
      </VStack>
    </>
  );
}

export default App;
