import {getResultBrainGame} from '../src/index.js';
import {getRandomInt} from '../src/random.js';
import { startBrainGame } from "../src/game.js";

export const brainPrime = (nameUser) => {
        let randomNum = getRandomInt(100);
        const expression = randomNum;
        const answer = chekPrimeNum(randomNum);
        let result = getResultBrainGame(nameUser, answer, expression);
        return result;
}

const chekPrimeNum = (num) => {
    for (let item = 2; item < num; item += 1) {
        if (num % item === 0) {
            return 'no';
        }
    }
    return num === 1 || num === 0 || num < 0 ? 'no' : 'yes';
}

startBrainGame(brainPrime, 'brainPrime');