import { useContext } from "react";
import TodoContext from "../TodoContext";
import { SET_FILTER } from "../types";
const TodoFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(TodoContext);
  return (
    <input
      type="text"
      value={filter}
      placeholder={filter ? filter : "🔎 Search"}
      onChange={(event) =>
        dispatch({ type: SET_FILTER, payload: event.target.value })
      }
    />
  );
};

export default TodoFilter;
