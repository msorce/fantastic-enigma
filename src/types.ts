import React from "react";

export interface TodoItemData {
  completed: boolean;
  todo: string;
  id: string;
}
export interface state {
  filter: string;
  todos: Array<TodoItemData>;
  isLoading: boolean;
}
export interface globalContext {
  state: state;
  dispatch: React.Dispatch<any>;
}

export interface Filter {
  filter: string;
}
