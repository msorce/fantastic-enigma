import { useState, useEffect } from "react";

const useFetchTodos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/todos")
      .then((todos) => todos.json())
      .then(({ todos }) => setTodos(todos))
      .finally(() => setIsLoading(false));
  }, []);

  return { todos, setTodos, isLoading };
};

export default useFetchTodos;
