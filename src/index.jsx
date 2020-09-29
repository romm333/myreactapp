import React from 'react';
import ReactDOM from 'react-dom';
import TodoWidget from './components/TodoWidget/TodoWidget';
import Calculator from './components/Calculator/Calculator';
import './app.css';

ReactDOM.render(<TodoWidget />, document.getElementById('todo'));
ReactDOM.render(<Calculator />, document.getElementById('calculator'));
