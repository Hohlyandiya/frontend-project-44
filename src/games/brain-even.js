import {getResultBrainGame} from '../index.js';
import {getRandomInt} from '../random.js';
import { startBrainGame } from '../game.js';

export const brainEven = (nameUser) => {
    let randomNum = getRandomInt(100);
    const expression = randomNum;
    const answer = randomNum % 2 === 0 ? 'yes' : 'no';
    let result = getResultBrainGame(nameUser, answer, expression);
    return result
}

startBrainGame(brainEven, 'Answer "yes" if the number is even, otherwise answer "no".');
