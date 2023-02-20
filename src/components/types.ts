export interface TodoItemData {
  completed: boolean;
  todo: string;
  id: string;
}

export interface TodoItemProps extends TodoItemData {
  handleUpdateTodo: (i: string) => void;
}

export interface Filter {
  filter: string;
}

export interface TodoFilterProps extends Filter {
  onFilterChange: (newFilter: string) => void;
}
