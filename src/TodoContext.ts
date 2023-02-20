import { createContext } from "react";
import { globalContext } from "./types";

const TodoContext = createContext<globalContext>({
  todos: [],
  setTodos: () => {},
  isLoading: false,
  setIsLoading: () => {},
  filter: "",
  setFilter: () => {},
  handleUpdateTodo: () => {},
});

export default TodoContext;
