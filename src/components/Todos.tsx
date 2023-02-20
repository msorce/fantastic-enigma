// import useFetchTodos from "../hooks/useFetchTodos";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { Filter } from "./types";
const Todos = ({ filter }: Filter) => {
  const [todos, setTodos] = useState([{ todo: "", completed: false, id: "" }]);
  const [isLoading, setIsLoading] = useState(false);
  const handleUpdateTodo = (i: string) => {
    const newTodos = todos.slice();
    newTodos.forEach((todo) => {
      const { id } = todo;
      if (id === i) todo.completed = !todo.completed;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/todos")
      .then((todos) => todos.json())
      .then(({ todos }) => setTodos(todos))
      .finally(() => setIsLoading(false));
  }, []);

  const renderTodos = todos
    .filter(({ todo }) => todo.toLowerCase().includes(filter.toLowerCase()))
    .map(({ completed, id, todo }) => {
      if (filter.length) {
        const reg = new RegExp(filter, "gi");
        todo = todo.replaceAll(reg, (word) => `<b>${word}</b>`);
      }
      return (
        <TodoItem
          key={id}
          completed={completed}
          todo={todo}
          id={id}
          handleUpdateTodo={handleUpdateTodo}
        />
      );
    });

  return <ul>{isLoading ? "loading..." : renderTodos}</ul>;
};

export default Todos;
