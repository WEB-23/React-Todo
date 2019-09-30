import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="New Todo"
          name="task"
          value={this.props.task}
          onChange={this.props.handleChange}
        />
        <button onClick={this.props.handleAdd}>Add</button>
      </form>
    );
  }
}

export default TodoForm;
