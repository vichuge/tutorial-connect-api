import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

// action example (object) (prop)
// action is for create/delete/update
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    //input
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
