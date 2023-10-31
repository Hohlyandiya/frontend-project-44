import {getResultBrainEven} from '../src/index.js';
import {getRandomInt} from '../src/random.js';
import readlineSync from '../readline-sync/lib/readline-sync.js';
import { startBrainGame } from "../src/game.js";

export const brainProgression = (nameUser) => {
        const answer = getProgression();
        console.log(`Question: ${answer[0]}`);
        let userAnswer = readlineSync.question('Your answer: ');
        const check = userAnswer === answer[1];
        let result = getResultBrainEven(nameUser, check, userAnswer, answer[1]);
        return result
}

const getProgression = () => {
    let startOfTheReport = getRandomInt(100);
    let interval = getRandomInt(10, 1);
    const listNum = [startOfTheReport];
    for (let i = 0; i < getRandomInt(10, 5); i++) {
        startOfTheReport += interval;
        listNum.push(startOfTheReport);
    }
    let replacingNumber = getRandomInt(listNum.length);
    let requiredNumber = listNum[replacingNumber];
    listNum[replacingNumber] = '..';
    let string = '';
    for (let item of listNum) {
        string += `${item} `;
    }
    return [string, `${requiredNumber}`];
}

startBrainGame(brainProgression, 'brainProgression');
