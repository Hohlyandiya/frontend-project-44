import {getResultBrainEven} from '../src/index.js';
import {getRandomInt} from '../src/random.js';
import { startBrainGame } from "../src/game.js";

export const brainProgression = (nameUser) => {
    const arr = getArray();
    const getAnswer = () => {
        const numPosition = getRandomInt(arr.length);
        return `${arr[numPosition]}`;
    }
    const answer = getAnswer();
    const getExpression = () => {
        arr[arr.indexOf(Number(answer))] = '..' 
        return arr.join(' ');
    }
    const expression = getExpression();
    let result = getResultBrainEven(nameUser, answer, expression);
    return result
}

const getArray = () => {
    let startOfTheReport = getRandomInt(100);
    const interval = getRandomInt(10, 1);
    const maxLength = getRandomInt(10, 5);
    const listNum = [startOfTheReport];
    for (let i = 0; i < maxLength; i++) {
        startOfTheReport += interval;
        listNum.push(startOfTheReport);
    }
    return listNum;
}

startBrainGame(brainProgression, 'brainProgression');
