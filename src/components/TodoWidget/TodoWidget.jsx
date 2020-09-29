import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodosList from './TodosList';
import InputTodo from './InputTodo';
import getImage from '../../../imageService';
import ImageFromAssets from './Assets/1.jpg';

import './TodoWidget.scss';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true,
        relatedImage: getImage('a')
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: true,
        relatedImage: getImage('b')
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
        relatedImage: getImage('c')
      }
    ]
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)]
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    };

    newTodo.relatedImage = getImage(title.charAt(0));

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className="container">
        <div className="todo--header">
          <img src={ImageFromAssets} alt="from assets" />
          <h1>Simple Todo App</h1>
          <p>Please add to-dos item(s) through the input field</p>
        </div>
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          onChange={this.handleChange}
          onDelete={this.delTodo}
        />
      </div>
    );
  }
}
export default TodoContainer;
