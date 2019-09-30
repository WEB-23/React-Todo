// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo.js";

class TodoList extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todos={this.props.todos}
              todo={todo}
              deleteTodo={this.props.deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
