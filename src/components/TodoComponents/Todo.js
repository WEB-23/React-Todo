import React from "react";
import styles from "./Todo.css";

class Todo extends React.Component {
  constructor(props) {
    super();
    console.log(props.deleteTodo);
  }

  render() {
    return (
      <>
        <li
          className="todo"
          onClick={() => {
            this.props.todo.completed = !this.props.todo.completed;
            if (this.props.todo.completed === true) {
              document.querySelector(".todo").classList.add("finished");
            } else {
              document.querySelector(".todo").classList.remove("finished");
            }
          }}
        >
          {this.props.todo.task}
        </li>
        <button onClick={() => this.props.deleteTodo(this.props.todo.key)}>
          Remove
        </button>
      </>
    );
  }
}

export default Todo;
