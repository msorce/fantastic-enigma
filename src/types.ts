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

// Action types
export const SET_FILTER = "SET_FILTER";
export const SET_TODOS = "SET_TODOS";
export const SET_ISLOADING = "SET_ISLOADING";
