import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <form onSubmit={this.props.addTodo}>
        <input
          type="text"
          placeholder="New Todo"
          name="task"
          value={this.props.task}
          onChange={this.props.handleChange}
        />
        <button>Add</button>
        <button>Remove</button>
      </form>
    );
  }
}

export default TodoForm;
