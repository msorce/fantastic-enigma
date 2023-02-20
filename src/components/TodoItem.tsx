import { TodoItemProps } from "./types";

const TodoItem = ({ completed, todo, id, handleUpdateTodo }: TodoItemProps) => (
  <li className={completed ? "completed" : ""}>
    <input
      type="checkbox"
      checked={completed ? true : false}
      name=""
      id=""
      onChange={(e) => handleUpdateTodo(id)}
    />{" "}
    <span dangerouslySetInnerHTML={{ __html: todo }}></span>
  </li>
);
export default TodoItem;
