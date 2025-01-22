import runGameEngine from '../index.js';
import getRandomNum from '../random.js';

const isNumberPrime = (num) => {
  for (let item = 2; item < num; item += 1) {
    if (num % item === 0) {
      return false;
    }
  }
  return num !== 1 || num !== 0 || num > 0;
};

const runBrainPrime = () => {
  const getAnswerAndExpression = () => {
    const limitNumber = 100;
    const randomNum = getRandomNum(limitNumber);
    const expression = randomNum;
    const answer = isNumberPrime(randomNum) ? 'yes' : 'no';
    const result = [answer, expression];
    return result;
  };
  const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGameEngine(getAnswerAndExpression, descriptionGame);
};

export default runBrainPrime;
