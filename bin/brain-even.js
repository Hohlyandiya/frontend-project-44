import {getNameUser} from "../src/cli.js";
import {getResultBrainEven} from '../src/index.js'
import {getRandomInt} from '../src/random.js'
import readlineSync from '../readline-sync/lib/readline-sync.js'

const brainEven = () => {
    const nameUser = getNameUser(); 
    let correctAnswers = 0;
    while (correctAnswers<3) {
        let randomNum = getRandomInt(100);
        console.log(`Question: ${randomNum}`);
        let userAnswer = readlineSync.question('Your answer: ');
        let answer = '';
        randomNum % 2 === 0 ? answer = 'yes' : answer = 'no';
        const check = userAnswer === answer ;
        let result = getResultBrainEven(nameUser, check, userAnswer, answer);
        result === 0 ? correctAnswers = 0 : correctAnswers += result;
    }
    console.log(`Congratulations, ${nameUser}`)
}

brainEven()