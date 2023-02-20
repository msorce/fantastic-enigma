import { useEffect, useReducer } from "react";
import "./App.css";
import TodoFilter from "./components/Todofilter";
import Todos from "./components/Todos";
import TodoContext from "./TodoContext";

const TodoReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "SET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };

    case "SET_ISLOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      throw new Error(`No Action ${action.type}`);
  }
};
const App = () => {
  const [state, dispatch] = useReducer(TodoReducer, {
    filter: "",
    todos: [],
    isLoading: false,
  });

  useEffect(() => {
    dispatch({ type: "SET_ISLOADING", payload: false });
    fetch("https://dummyjson.com/todos")
      .then((todos) => todos.json())
      .then(({ todos }) => dispatch({ type: "SET_TODOS", payload: todos }))
      .finally(() => dispatch({ type: "SET_ISLOADING", payload: false }));
  }, []);

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="App">
        <TodoFilter />
        <Todos />
      </div>
    </TodoContext.Provider>
  );
};

export default App;
