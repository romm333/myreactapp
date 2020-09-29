import React from 'react';
import PropTypes from 'prop-types';

import './TodosList.scss';

const TodoItem = ({ todo, onDelete, onChange }) => (
  <li className="todoitem">
    <div className="todoitem--button-wrapper">
      <button type="button" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onChange(todo.id)}
      className="todoitem--input"
    />
    <img src={todo.relatedImage} alt="Ok" />
    {todo.title}
  </li>
);

const TodosList = ({ todos, onChange, onDelete }) => (
  <div>
    <ul>
      {(todos || []).map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onChange={onChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  </div>
);

const todoShape = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  completed: PropTypes.bool,
  relatedImage: PropTypes.string
});

TodoItem.propTypes = {
  todo: todoShape.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(todoShape).isRequired,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
export default TodosList;
