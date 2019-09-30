import React from "react";
import { unlink } from "fs";

class Todo extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <li>{this.props.todo.task}</li>
      </>
    );
  }
}

export default Todo;
