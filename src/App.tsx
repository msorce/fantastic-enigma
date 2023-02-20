import "./App.css";
import TodoContext from "./TodoContext";
import TodoFilter from "./components/Todofilter";
import Todos from "./components/Todos";
import useTodoReducer from "./hooks/useTodoReducer";

const App = () => {
  const { state, dispatch } = useTodoReducer();

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
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
