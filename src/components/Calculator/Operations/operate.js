import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || '0');
  const two = Big(
    numberTwo || (operation === '÷' || operation === 'x' ? '1' : '0')
  );

  switch (operation) {
    case '+':
      return one.plus(two).toString();
    case '-':
      return one.minus(two).toString();
    case 'x':
      return one.times(two).toString();
    case '%':
      return one.times(two).div(100).toString();
    case '÷':
      if (two.eq(0)) {
        alert('Division by 0 is not allowed');
        return '0';
      }
      return one.div(two).toString();

    default:
      throw Error(`Unknown operation '${operation}'`);
  }
}

export default operate;
