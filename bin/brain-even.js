import {getResultBrainGame} from '../src/index.js';
import {getRandomInt} from '../src/random.js';
import { startBrainGame } from '../src/game.js';

export const brainEven = (nameUser) => {
    let randomNum = getRandomInt(100);
    const expression = randomNum;
    const answer = randomNum % 2 === 0 ? 'yes' : 'no';
    let result = getResultBrainGame(nameUser, answer, expression);
    return result
}

startBrainGame(brainEven, 'brainEven');
