import { useContext } from "react";
import TodoContext from "../TodoContext";
import { TodoItemData, SET_TODOS } from "../types";

const TodoItem = ({ completed, todo, id }: TodoItemData) => {
  const {
    state: { todos },
    dispatch,
  } = useContext(TodoContext);

  const handleUpdateTodo = (clickedId: string) => {
    const newTodos = todos.slice();
    newTodos.forEach((todo) => {
      const { id } = todo;
      if (id === clickedId) todo.completed = !todo.completed;
    });
    dispatch({ type: SET_TODOS, payload: newTodos });
  };

  return (
    <li className={completed ? "completed" : ""}>
      <input
        type="checkbox"
        checked={completed ? true : false}
        name=""
        id={id}
        onChange={(e) => handleUpdateTodo(id)}
      />{" "}
      <label htmlFor={id} dangerouslySetInnerHTML={{ __html: todo }}></label>
    </li>
  );
};
export default TodoItem;
