import runGameEngine from '../index.js';
import getRandomNum from '../random.js';

const getGCD = (num1, num2) => {
  let firstNum = num1;
  let secondNum = num2;
  let CommonGreatestDivisor = 0;
  while (firstNum !== 0 && secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
    CommonGreatestDivisor = firstNum + secondNum;
  }
  return CommonGreatestDivisor;
};

const runBrainGCD = () => {
  const getAnswerAndExpression = () => {
    const limitNumber = 100;
    const randomNum1 = getRandomNum(limitNumber);
    const randomNum2 = getRandomNum(limitNumber);
    const expression = `${randomNum1} ${randomNum2}`;
    const answer = String(getGCD(randomNum1, randomNum2));
    const result = [answer, expression];
    return result;
  };
  const descriptionGame = 'Find the greatest common divisor of given numbers.';
  runGameEngine(getAnswerAndExpression, descriptionGame);
};

export default runBrainGCD;
