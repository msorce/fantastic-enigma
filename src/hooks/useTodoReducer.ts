import { useEffect, useReducer } from "react";
import TodoReducer from "../reducers/TodoReducer";
import { SET_TODOS, SET_ISLOADING } from "../types";

const useTodoReducer = () => {
  const [state, dispatch] = useReducer(TodoReducer, {
    filter: "",
    todos: [],
    isLoading: false,
  });

  useEffect(() => {
    dispatch({ type: SET_ISLOADING, payload: false });
    fetch("https://dummyjson.com/todos")
      .then((todos) => todos.json())
      .then(({ todos }) => dispatch({ type: SET_TODOS, payload: todos }))
      .finally(() => dispatch({ type: SET_ISLOADING, payload: false }));
  }, []);

  return { state, dispatch };
};

export default useTodoReducer;
