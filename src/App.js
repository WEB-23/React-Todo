// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			todos: [
				{
					task: 'Organize Garage',
					id: 1528817077286,
					completed: false
				},
				{
					task: 'Bake Cookies',
					id: 1528817084358,
					completed: false
				}
			],
			task: ''
		};
	}

	handleAdd = (event) => {
		event.preventDefault();

		const addTodo = () => {
			const newItem = {
				task: this.state.task,
				id: Date.now(),
				completed: false
			};
			this.setState({
				todos: [ ...this.state.todos, newItem ]
			});
		};

		addTodo();
	};

	deleteTodo = (key) => {
		const filteredItems = this.state.todos.filter((item) => {
			// this is the line where the delete functionality was not working
			// had to compare item.id and key
			return item.id !== key;
		});
		this.setState({
			todos: filteredItems
		});
	};

	toggleItem = (id) => {
		console.log(id);
		// use this.setState
		// loop through the arr
		// find which element we clicked update the "completed" property
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						// Same as:
						// name: item.name,
						// id: item.id,
						// completed: item.completed,
						completed: !todo.completed
					};
				} else {
					return todo;
				}
			})
		});
	};

	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(this.state.task);
	};

	render() {
		return (
			<div className="App">
				<h2>What Do you need Todo?</h2>
				<TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} toggleItem={this.toggleItem} />
				<TodoForm task={this.state.task} handleChange={this.handleChange} handleAdd={this.handleAdd} />
			</div>
		);
	}
}

export default App;
