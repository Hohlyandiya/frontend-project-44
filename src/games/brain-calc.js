import {getResultBrainGame} from '../index.js';
import {getRandomInt} from '../random.js';
import { startBrainGame } from "../../bin/game.js";

export const brainCalc = (nameUser) => {
    let randomNum1 = getRandomInt(100);
    let randomNum2 = getRandomInt(100);
    const actions = ['+', '-', '*'];
    const action = getRandomInt(3);
    const answer = getAnswer(randomNum1, randomNum2, actions[action]);
    const expression = getExpression(randomNum1, randomNum2, actions[action]);
    let result = getResultBrainGame(nameUser, answer, expression);
    return result
}

const getAnswer = (num1, num2, action) => {
    let result = 0;
    switch (action) {
        case '+':
            result = num1 + num2;
            return `${result}`
        case '-':
            result = num1 - num2;
            return `${result}`
        case '*':
            result = num1 * num2;
            return `${result}`
    }
}

const getExpression = (num1, num2, action) => {
    switch (action) {
        case '+':
            return `${num1} ${action} ${num2}`;
        case '-': 
            return `${num1} ${action} ${num2}`;
        case '*': 
            return `${num1} ${action} ${num2}`;
    }
}

startBrainGame(brainCalc, 'What is the result of the expression?');