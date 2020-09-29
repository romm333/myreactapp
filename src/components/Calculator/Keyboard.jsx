import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Keyboard.css';

class Keyboard extends React.Component {
  handleClick = (buttonName) => {
    this.props.onClick(buttonName);
  };

  render() {
    return (
      <div className="keyboard">
        <div>
          <Button name="AC" onClick={this.handleClick} />
          <Button name="+/-" onClick={this.handleClick} />
          <Button name="%" onClick={this.handleClick} />
          <Button name="÷" onClick={this.handleClick} operator />
        </div>
        <div>
          <Button name="7" onClick={this.handleClick} />
          <Button name="8" onClick={this.handleClick} />
          <Button name="9" onClick={this.handleClick} />
          <Button name="x" onClick={this.handleClick} operator />
        </div>
        <div>
          <Button name="4" onClick={this.handleClick} />
          <Button name="5" onClick={this.handleClick} />
          <Button name="6" onClick={this.handleClick} />
          <Button name="-" onClick={this.handleClick} operator />
        </div>
        <div>
          <Button name="1" onClick={this.handleClick} />
          <Button name="2" onClick={this.handleClick} />
          <Button name="3" onClick={this.handleClick} />
          <Button name="+" onClick={this.handleClick} operator />
        </div>
        <div>
          <Button name="0" onClick={this.handleClick} wide />
          <Button name="." onClick={this.handleClick} />
          <Button name="=" onClick={this.handleClick} operator />
        </div>
      </div>
    );
  }
}
Keyboard.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Keyboard;
