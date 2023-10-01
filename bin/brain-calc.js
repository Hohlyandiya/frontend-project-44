import {getNameUser} from "../src/cli.js";
import {getResultBrainEven} from '../src/index.js'
import {getRandomInt} from '../src/random.js'
import readlineSync from '../readline-sync/lib/readline-sync.js'

const brainCalc = () => {
    const nameUser = getNameUser(); 
    let correctAnswers = 0;
    console.log('What is the result of the expression?')
    while (correctAnswers<3) {
        const answer = example();
        console.log(`Question: ${answer[0]}`);
        let userAnswer = readlineSync.question('Your answer: ');
        const check = userAnswer === answer[1]
        let result = getResultBrainEven(nameUser, check, userAnswer, answer[1]);
        result === 0 ? correctAnswers = 0 : correctAnswers += result;
    }
    console.log(`Congratulations, ${nameUser}`)
}

const example = () => {
    let result = 0;
    let randomNum1 = getRandomInt(100);
    let randomNum2 = getRandomInt(100);
    const action = getRandomInt(3);
    if (action === 0) {
        result = randomNum1 + randomNum2;
        return [`${randomNum1} + ${randomNum2}`, `${result}`]
    } else if (action === 1) {
        result = randomNum1 - randomNum2;
        return [`${randomNum1} - ${randomNum2}`, `${result}`]
    } else if (action === 2) {
        result = randomNum1 * randomNum2;
        return [`${randomNum1} * ${randomNum2}`, `${result}`]
    }
}

brainCalc()