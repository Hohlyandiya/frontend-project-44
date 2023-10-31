import {getResultBrainEven} from '../src/index.js';
import {getRandomInt} from '../src/random.js';
import { startBrainGame } from "../src/game.js";

export const brainCalc = (nameUser) => {
    let randomNum1 = getRandomInt(100);
    let randomNum2 = getRandomInt(100);
    const action = getRandomInt(3);
    const answer = getAnswer(randomNum1, randomNum2, action);
    const expression = getExpression(randomNum1, randomNum2, action);
    let result = getResultBrainEven(nameUser, answer, expression);
    return result
}

const getAnswer = (num1, num2, action) => {
    let result = 0;
    switch (action) {
        case 0:
            result = num1 + num2;
            return `${result}`
        case 1:
            result = num1 - num2;
            return `${result}`
        case 2:
            result = num1 * num2;
            return `${result}`
    }
}

const getExpression = (num1, num2, action) => {
    switch (action) {
        case 0:
            return `${num1} + ${num2}`;
        case 1: 
            return `${num1} - ${num2}`;
        case 2: 
            return `${num1} * ${num2}`;
    }
}

startBrainGame(brainCalc, 'brainCalc');