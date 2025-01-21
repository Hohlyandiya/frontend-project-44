import { getResultBrainGame, startBrainGame } from '../index.js';
import getRandomInt from '../random.js';

const brainEven = () => {
  const getSolution = () => {
    const randomNum = getRandomInt(100);
    const expression = randomNum;
    const answer = randomNum % 2 === 0 ? 'yes' : 'no';
    const result = getResultBrainGame(answer, expression);
    return result;
  };
  const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  startBrainGame(getSolution, descriptionGame);
};

export default brainEven;
