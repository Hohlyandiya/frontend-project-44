import { getResultBrainGame } from '../index.js';
import { getRandomInt } from '../random.js';
import { startBrainGame } from '../../bin/game.js';

export const brainGCD = (nameUser) => {
    let randomNum1 = getRandomInt(100);
    let randomNum2 = getRandomInt(100);
    const expression = getExpression(randomNum1, randomNum2);
    const answer = checkPrimeNum(randomNum1, randomNum2);
    let result = getResultBrainGame(nameUser, answer, expression);
    return result
}

const checkPrimeNum = (num1, num2) => {
    while (num1 !== 0 && num2 !== 0) {
        num1 > num2 ? num1 = num1 % num2 : num2 = num2 % num1
    }
    return `${num1 + num2}`;
}

const getExpression = (num1, num2) => `${num1} ${num2}`;

startBrainGame(brainGCD, 'Find the greatest common divisor of given numbers.');