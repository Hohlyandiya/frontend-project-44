import {getResultBrainEven} from '../src/index.js';
import {getRandomInt} from '../src/random.js';
import readlineSync from '../readline-sync/lib/readline-sync.js';
import { startBrainGame } from '../src/game.js';

export const brainEven = (nameUser) => {
    let randomNum = getRandomInt(100);
    console.log(`Question: ${randomNum}`);
    let userAnswer = readlineSync.question('Your answer: ');
    let answer = '';
    randomNum % 2 === 0 ? answer = 'yes' : answer = 'no';
    const check = userAnswer === answer ;
    let result = getResultBrainEven(nameUser, check, userAnswer, answer);
    return result
}

startBrainGame(brainEven, 'brainEven');
