import {getResultBrainEven} from '../src/index.js';
import {getRandomInt} from '../src/random.js';
import { startBrainGame } from '../src/game.js';

export const brainGCD = (nameUser) => {
    let randomNum1 = getRandomInt(100);
    let randomNum2 = getRandomInt(100);
    const expression = getExpression(randomNum1, randomNum2);
    const answer = checkPrimeNum(randomNum1, randomNum2);
    let result = getResultBrainEven(nameUser, answer, expression);
    return result
}

const checkPrimeNum = (num1, num2) => {
    if (Math.max(num1, num2) % Math.min(num1, num2) === 0) {
        return [`${num1} ${num2}`, `${Math.min(num1, num2)}`];
    }
    let primeMultipliersNum1 = getPrimeFactors(num1);
    let primeMultipliersNum2 = getPrimeFactors(num2);
    let result = `${serchGCD(primeMultipliersNum1, primeMultipliersNum2)}`;
    return result;
}

const getExpression = (num1, num2) => `${num1} ${num2}`;

const getPrimeFactors = (randomNum) => {
    const primeDivisorMultipliers = []
    const primeMultipliers = [2, 3, 5, 7];
    for (let i = 0; i < primeMultipliers.length; i) {
        if (randomNum % primeMultipliers[i] === 0) {
            primeDivisorMultipliers.push(primeMultipliers[i]);
            randomNum = randomNum / primeMultipliers[i];
        } else {
            i += 1;
        }
    }
    return primeDivisorMultipliers
}

const serchGCD = (primeMultipliersNum1, primeMultipliersNum2) => {
    let result = 1;
    for (let i = 0; i < primeMultipliersNum1.length || i < primeMultipliersNum2.length; i++) {
        if (primeMultipliersNum1[i] === primeMultipliersNum2[i] ) {
            result = result * primeMultipliersNum1[i];
        }
    }
    return result;
}

startBrainGame(brainGCD, 'brainGCD');