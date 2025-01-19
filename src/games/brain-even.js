import getResultBrainGame from '../index.js';
import getRandomInt from '../random.js';

const brainEven = () => {
  const randomNum = getRandomInt(100);
  const expression = randomNum;
  const answer = randomNum % 2 === 0 ? 'yes' : 'no';
  const result = getResultBrainGame(answer, expression);
  return result;
};

export default brainEven;
