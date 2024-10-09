export const calculate = (val1, val2, operator) => {
  const num1 = parseInt(val1);
  const num2 = parseInt(val2);
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
    break;
    case '-':
        result = num1 - num2;
    break;
    case '*':
        result = num1 * num2;
    break;
    case '/':
        if(num2 === 0) {
            return 'Cannot divide by zero';
        }
        result = num1 / num2;
    break;
    default:
        throw new Error('Invalid operator');
  }
  return result;
}