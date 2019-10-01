// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo.js";

class TodoList extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
            <Todo
              todo={todo}
              deleteTodo={this.props.deleteTodo}
              key={todo.id}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
