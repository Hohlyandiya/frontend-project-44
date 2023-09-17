import readlineSync from '../readline-sync/lib/readline-sync.js'
import {getNameUser} from "../src/cli.js";

export const brainEven = () => {
    const nameUser = getNameUser();
    let correctAnswers = 0;
    while (correctAnswers<3) {
        let randomInt = getRandomInt();
        console.log(`Question: ${randomInt}`);
        let answer = readlineSync.question('Your answer: ');
        if (randomInt % 2 === 0 && answer.toLowerCase() === 'yes' || randomInt % 2 !== 0 && answer.toLowerCase() === 'no') {
            console.log('Correct!');
            correctAnswers++;
        } else if (randomInt % 2 === 0 && answer.toLowerCase() !== 'yes') {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${nameUser}`)
            correctAnswers = 0;
        } else if (randomInt % 2 !== 0 && answer.toLowerCase() !== 'no') {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${nameUser}}`)
            correctAnswers = 0;
        }
    }
    return console.log(`Congratulations, ${nameUser}`)
}

const getRandomInt = () => {
    return Math.floor(Math.random() * 100);
}

brainEven()