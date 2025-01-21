import { getResultBrainGame, startBrainGame } from '../index.js';
import getRandomInt from '../random.js';

const getAnswer = (num1, num2, action) => {
  let result = 0;
  switch (action) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = 0;
      break;
  }

  return `${result}`;
};

const getExpression = (num1, num2, action) => {
  let result = '';
  switch (action) {
    case '+':
      result = `${num1} ${action} ${num2}`;
      break;
    case '-':
      result = `${num1} ${action} ${num2}`;
      break;
    case '*':
      result = `${num1} ${action} ${num2}`;
      break;
    default:
      result = 'Error';
      break;
  }

  return result;
};

const brainCalc = () => {
  const getSolution = () => {
    const randomNum1 = getRandomInt(100);
    const randomNum2 = getRandomInt(100);
    const actions = ['+', '-', '*'];
    const action = getRandomInt(3);
    const answer = getAnswer(randomNum1, randomNum2, actions[action]);
    const expression = getExpression(randomNum1, randomNum2, actions[action]);
    const result = getResultBrainGame(answer, expression);
    return result;
  };
  const descriptionGame = 'What is the result of the expression?';
  startBrainGame(getSolution, descriptionGame);
};

export default brainCalc;
