import React from "react";
import cx from "classnames";

import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo }) => (
  <li
    className="todo-item"
    onClick={() => {} /** dispatches action to toggle todo */}
  >
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
);

export default connect(
  null,
  { toggleTodo }
)(Todo);
