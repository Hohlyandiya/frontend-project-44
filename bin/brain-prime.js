import {getNameUser} from "../src/cli.js";
import {getResultBrainEven} from '../src/index.js'
import {getRandomInt} from '../src/random.js'
import readlineSync from '../readline-sync/lib/readline-sync.js'

const brainProgression = (nameUser) => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    for (let count = 0; count < 3; count) {
        let randomNum = getRandomInt(100);
        const answer = chekPrimeNum(randomNum);
        console.log(`Question: ${randomNum}`);
        let userAnswer = readlineSync.question('Your answer: ');
        const check = userAnswer === answer
        let result = getResultBrainEven(nameUser, check, userAnswer, answer);
        result === 0 ? count = 0 : count += result;
    }
    console.log(`Congratulations, ${nameUser}`)
}

const chekPrimeNum = (num) => {
    for (let item = 2; item < num; item += 1) {
        if (num % item === 0) {
            return 'no';
        }
    }
    return num === 1 || num === 0 || num < 0 ? 'no' : 'yes';
}

brainProgression(getNameUser())