import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../TodoContext";
const Todos = () => {
  const {
    state: { todos, filter, isLoading },
  } = useContext(TodoContext);

  const renderTodos = todos
    .filter(({ todo }) => todo.toLowerCase().includes(filter.toLowerCase()))
    .map(({ completed, id, todo }) => {
      if (filter.length) {
        const reg = new RegExp(filter, "gi");
        todo = todo.replaceAll(reg, (word) => `<b>${word}</b>`);
      }
      return <TodoItem key={id} completed={completed} todo={todo} id={id} />;
    });

  return <ul>{isLoading ? "loading..." : renderTodos}</ul>;
};

export default Todos;
