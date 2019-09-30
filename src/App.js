// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

import React from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ],
      task: ""
    };
  }

  handleSubmit = () => {};

  handleChange = event => {
    this.setState({
      task: event.target.value
    });
  };

  addTodo = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
    console.log(this.state.todos);
  };

  render() {
    return (
      <div className="App">
        <h2>What Do you need Todo?</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
          task={this.state.task}
          addTodo={this.addTodo}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
