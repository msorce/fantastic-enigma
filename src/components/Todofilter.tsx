import { useContext } from "react";
import TodoContext from "../TodoContext";
const TodoFilter = () => {
  const { filter, setFilter } = useContext(TodoContext);
  return (
    <input
      type="text"
      value={filter}
      placeholder={filter ? filter : "🔎 Search"}
      onChange={(event) => setFilter(event.target.value)}
    />
  );
};

export default TodoFilter;
