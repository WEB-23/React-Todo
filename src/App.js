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

  handleAdd = event => {
    event.preventDefault();

    const addTodo = newTodo => {
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    };

    // * making a new object and taking everything from current state and adding Date.now().
    // * id can also be replaced by id: uuid() from the uuid library.
    addTodo({ ...this.state, id: Date.now() });
    this.setState({ task: "" });
    console.log(this.state.todos);
  };

  deleteTodo = key => {
    const filteredItems = this.state.todos.filter(item => {
      return item.key !== key;
      console.log("hi");
    });
    this.setState({
      todos: filteredItems
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.task);
  };

  finishedTodo = () => {
    document.querySelector("todo").classList.add("finshed");
  };

  render() {
    return (
      <div className="App">
        <h2>What Do you need Todo?</h2>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm
          task={this.state.task}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          finishedTodo={this.finishedTodos}
        />
      </div>
    );
  }
}

export default App;
