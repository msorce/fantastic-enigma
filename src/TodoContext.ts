import { createContext } from "react";
import { globalContext } from "./types";

const TodoContext = createContext<globalContext>({
  state: { filter: "", todos: [], isLoading: false },
  dispatch: () => null,
});

export default TodoContext;
