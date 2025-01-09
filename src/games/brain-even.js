import getResultBrainGame from '../index.js';
import getRandomInt from '../random.js';
import startBrainGame from '../../bin/game.js';

const brainEven = (nameUser) => {
  const randomNum = getRandomInt(100);
  const expression = randomNum;
  const answer = randomNum % 2 === 0 ? 'yes' : 'no';
  const result = getResultBrainGame(nameUser, answer, expression);
  return result;
};

startBrainGame(brainEven, 'Answer "yes" if the number is even, otherwise answer "no".');
