import getResultBrainGame from '../index.js';
import getRandomInt from '../random.js';

const checkPrimeNum = (num1, num2) => {
  let firstNum = num1;
  let secondNum = num2;
  while (num1 !== 0 && num2 !== 0) {
    firstNum > secondNum ? firstNum %= secondNum : secondNum %= firstNum;
  }
  return `${firstNum + secondNum}`;
};

const getExpression = (num1, num2) => `${num1} ${num2}`;

const brainGCD = () => {
  const randomNum1 = getRandomInt(100);
  const randomNum2 = getRandomInt(100);
  const expression = getExpression(randomNum1, randomNum2);
  const answer = checkPrimeNum(randomNum1, randomNum2);
  const result = getResultBrainGame(answer, expression);
  return result;
};

export default brainGCD;
