import React from "react";
import styles from "./Todo.css";

class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <li
          className="todo"
          onClick={this.props.toggleItem, console.log(this.props.todo)}
        >
          {this.props.todo.task}
        </li>
        <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>
          X
        </button>
      </>
    );
  }
}

export default Todo;
