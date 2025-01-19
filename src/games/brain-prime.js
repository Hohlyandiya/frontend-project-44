import getResultBrainGame from '../index.js';
import getRandomInt from '../random.js';

const chekPrimeNum = (num) => {
  for (let item = 2; item < num; item += 1) {
    if (num % item === 0) {
      return 'no';
    }
  }
  return num === 1 || num === 0 || num < 0 ? 'no' : 'yes';
};

const brainPrime = () => {
  const randomNum = getRandomInt(100);
  const expression = randomNum;
  const answer = chekPrimeNum(randomNum);
  const result = getResultBrainGame(answer, expression);
  return result;
};

export default brainPrime;
