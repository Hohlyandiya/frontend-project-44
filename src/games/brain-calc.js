import getResultBrainGame from '../index';
import getRandomInt from '../random';
import startBrainGame from '../../bin/game';

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

const brainCalc = (nameUser) => {
  const randomNum1 = getRandomInt(100);
  const randomNum2 = getRandomInt(100);
  const actions = ['+', '-', '*'];
  const action = getRandomInt(3);
  const answer = getAnswer(randomNum1, randomNum2, actions[action]);
  const expression = getExpression(randomNum1, randomNum2, actions[action]);
  const result = getResultBrainGame(nameUser, answer, expression);
  return result;
};

startBrainGame(brainCalc, 'What is the result of the expression?');
