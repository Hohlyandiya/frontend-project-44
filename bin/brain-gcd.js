import {getNameUser} from "../src/cli.js";
import {getResultBrainEven} from '../src/index.js'
import {getRandomInt} from '../src/random.js'
import readlineSync from '../readline-sync/lib/readline-sync.js'

const brainGCD = () => {
    const nameUser = getNameUser(); 
    let correctAnswers = 0;
    while (correctAnswers<3) {
        const answer = checkPrimeNum();
        console.log(`Question: ${answer[0]}`);
        let userAnswer = readlineSync.question('Your answer: ');
        const check = userAnswer === answer[1]
        let result = getResultBrainEven(nameUser, check, userAnswer, answer[1]);
        result === 0 ? correctAnswers = 0 : correctAnswers += result;
    }
    console.log(`Congratulations, ${nameUser}`)
}

const checkPrimeNum = () => {
    let randomNum1 = getRandomInt();
    let randomNum2 = getRandomInt();
    if (Math.max(randomNum1, randomNum2) % Math.min(randomNum1, randomNum2) === 0) {
        return [`${randomNum1} ${randomNum2}`, `${Math.min(randomNum1, randomNum2)}`];
    }
    let primeMultipliersNum1 = getPrimeFactors(randomNum1);
    let primeMultipliersNum2 = getPrimeFactors(randomNum2);
    let result = [`${randomNum1} ${randomNum2}`, `${serchGCD(primeMultipliersNum1, primeMultipliersNum2)}`];
    return result;
}

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

brainGCD();