import {getResultBrainEven} from '../src/index.js';
import {getRandomInt} from '../src/random.js';
import readlineSync from '../readline-sync/lib/readline-sync.js';
import { startBrainGame } from "../src/game.js";

export const brainPrime = (nameUser) => {
        let randomNum = getRandomInt(100);
        const answer = chekPrimeNum(randomNum);
        console.log(`Question: ${randomNum}`);
        let userAnswer = readlineSync.question('Your answer: ');
        const check = userAnswer === answer;
        let result = getResultBrainEven(nameUser, check, userAnswer, answer);
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