import runGameEngine from '../index.js';
import getRandomNum from '../random.js';

const getTaskAnswer = (num1, num2, action) => {
  switch (action) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Action not provided for by the program');
  }
};

const runBrainCalc = () => {
  const getAnswerAndExpression = () => {
    const limitNumber = 100;
    const randomNum1 = getRandomNum(limitNumber);
    const randomNum2 = getRandomNum(limitNumber);
    const actions = ['+', '-', '*'];
    const action = getRandomNum(actions.length);
    const answer = String(getTaskAnswer(randomNum1, randomNum2, actions[action]));
    const expression = `${randomNum1} ${actions[action]} ${randomNum2}`;
    const result = [answer, expression];
    return result;
  };
  const descriptionGame = 'What is the result of the expression?';
  runGameEngine(getAnswerAndExpression, descriptionGame);
};

export default runBrainCalc;
