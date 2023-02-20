import { TodoFilterProps } from "./types";
const TodoFilter = ({ filter, onFilterChange }: TodoFilterProps) => {
  return (
    <input
      type="text"
      value={filter}
      placeholder={filter ? filter : "🔎 Search"}
      onChange={(event) => onFilterChange(event.target.value)}
    />
  );
};

export default TodoFilter;
