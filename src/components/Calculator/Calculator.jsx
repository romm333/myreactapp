import React from 'react';
import ResultViewer from './ResultViewer';
import Keyboard from './Keyboard';
import calculate from './Operations/calculate';

import './Calculator.css';

class Calculator extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null
  };

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="calculator">
        <ResultViewer value={this.state.next || this.state.total || '0'} />
        <Keyboard onClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
