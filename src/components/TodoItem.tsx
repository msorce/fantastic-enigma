import { TodoItemProps } from "./types";

const TodoItem = ({ completed, todo, id, handleUpdateTodo }: TodoItemProps) => (
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
export default TodoItem;
