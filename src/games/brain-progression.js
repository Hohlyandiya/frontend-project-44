import { getResultBrainGame } from '../index.js';
import { getRandomInt } from '../random.js';
import { startBrainGame } from "../../bin/game.js";

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
    let result = getResultBrainGame(nameUser, answer, expression);
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

startBrainGame(brainProgression, 'What number is missing in the progression?');
