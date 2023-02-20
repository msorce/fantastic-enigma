import { useState } from "react";
import "./App.css";
import TodoFilter from "./components/Todofilter";
import Todos from "./components/Todos";

const App = () => {
  const [filter, setFilter] = useState("");

  const onFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div className="App">
      <TodoFilter filter={filter} onFilterChange={onFilterChange} />
      <Todos filter={filter} />
    </div>
  );
};

export default App;
