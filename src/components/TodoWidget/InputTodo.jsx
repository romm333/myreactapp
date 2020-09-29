import React from 'react';
import PropTypes from 'prop-types';
import './InputTodo.scss';

class InputTodo extends React.Component {
  state = {
    title: ''
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="inputTodoForm">
        <input
          type="text"
          name="title"
          placeholder="Add todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired
};

export default InputTodo;
