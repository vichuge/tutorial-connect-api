import React from "react";
import Todo from "./Todo";

import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";
// import store from "../redux/store";

/* The same as:
const TodoList = (props) => {
  const { todos } = props;
  render(
*/
const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
        return <Todo key={`todo-${todo.id}`} todo={todo} />;
      })
      : "No todos, yay!"}
  </ul>
);

/* the first one
const mapStateToProps = state => {
  const { byIds, allIds } = state.todos || {};
  const todos =
    allIds && allIds.length
      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
      : null;
  return { todos };
};*/

// const mapStateToProps = store => ({ todos: store.todos });
// const mapStateToProps = wathever => ({ todos: getTodos(wathever) });

// the last one ---const mapStateToProps = store => ({ todos: getTodos(store) });

// export default connect(state => ({ todos: getTodos(state) }), null)(TodoList);
// export default connect(mapStateToProps, null)(TodoList);

// the last one ---export default connect(mapStateToProps, null)(TodoList);


const mapStateToProps = (state) => {
  const { visibilityFilter } = state
  const todos = getTodosByVisibilityFilter(state, visibilityFilter)
  return { todos }
}

export default connect(mapStateToProps)(TodoList)

