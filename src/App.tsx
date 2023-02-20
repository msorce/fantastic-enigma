import { useEffect, useState } from "react";
import "./App.css";
import TodoFilter from "./components/Todofilter";
import Todos from "./components/Todos";
import TodoContext from "./TodoContext";
import { TodoItemData } from "./types";
const App = () => {
  const [filter, setFilter] = useState("");
  const [todos, setTodos] = useState<TodoItemData[]>([
    { todo: "", completed: false, id: "" },
  ]);
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

  return (
    <TodoContext.Provider
      value={{
        filter,
        setFilter,
        todos,
        setTodos,
        isLoading,
        setIsLoading,
        handleUpdateTodo,
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
