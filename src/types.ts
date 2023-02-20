export interface TodoItemData {
  completed: boolean;
  todo: string;
  id: string;
}
export interface globalContext {
  setTodos: any;
  isLoading: boolean;
  setIsLoading: any;
  filter: string;
  setFilter: any;
  todos: Array<TodoItemData>;
  handleUpdateTodo: (i: string) => void;
}

export interface TodoItemProps extends TodoItemData {
  handleUpdateTodo: (i: string) => void;
}

export interface Filter {
  filter: string;
}
