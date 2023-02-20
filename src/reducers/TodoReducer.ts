import { SET_FILTER, SET_ISLOADING, SET_TODOS } from "../types";

const TodoReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    case SET_ISLOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      throw new Error(`No Action ${action.type}`);
  }
};
export default TodoReducer;
