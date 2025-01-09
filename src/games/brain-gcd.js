import getResultBrainGame from '../index.js';
import getRandomInt from '../random.js';
import startBrainGame from '../../bin/game.js';

const checkPrimeNum = (num1, num2) => {
  let firstNum = num1;
  let secondNum = num2;
  while (num1 !== 0 && num2 !== 0) {
    firstNum > secondNum ? firstNum %= secondNum : secondNum %= firstNum;
  }
  return `${firstNum + secondNum}`;
};

const getExpression = (num1, num2) => `${num1} ${num2}`;

const brainGCD = (nameUser) => {
  const randomNum1 = getRandomInt(100);
  const randomNum2 = getRandomInt(100);
  const expression = getExpression(randomNum1, randomNum2);
  const answer = checkPrimeNum(randomNum1, randomNum2);
  const result = getResultBrainGame(nameUser, answer, expression);
  return result;
};

startBrainGame(brainGCD, 'Find the greatest common divisor of given numbers.');
