import {getNameUser} from "../src/cli.js";
import {getResultBrainEven} from '../src/index.js'
import {getRandomInt} from '../src/random.js'
import readlineSync from '../readline-sync/lib/readline-sync.js'

const brainEven = (nameUser) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let count = 0; count < 3; count) {
        let randomNum = getRandomInt(100);
        console.log(`Question: ${randomNum}`);
        let userAnswer = readlineSync.question('Your answer: ');
        let answer = '';
        randomNum % 2 === 0 ? answer = 'yes' : answer = 'no';
        const check = userAnswer === answer ;
        let result = getResultBrainEven(nameUser, check, userAnswer, answer);
        result === 0 ? count = 0 : count += result;
    }
    console.log(`Congratulations, ${nameUser}`)
}

brainEven(getNameUser())