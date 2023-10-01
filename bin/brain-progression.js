import {getNameUser} from "../src/cli.js";
import {getResultBrainEven} from '../src/index.js'
import {getRandomInt} from '../src/random.js'
import readlineSync from '../readline-sync/lib/readline-sync.js'

const brainProgression = () => {
    const nameUser = getNameUser(); 
    let correctAnswers = 0;
    console.log('What number is missing in the progression?')
    while (correctAnswers<3) {
        const answer = getProgression();
        console.log(`Question: ${answer[0]}`);
        let userAnswer = readlineSync.question('Your answer: ');
        const check = userAnswer === answer[1]
        let result = getResultBrainEven(nameUser, check, userAnswer, answer[1]);
        result === 0 ? correctAnswers = 0 : correctAnswers += result;
    }
    console.log(`Congratulations, ${nameUser}`)
}

const getProgression = () => {
    let startOfTheReport = getRandomInt(100);
    let interval = getRandomInt(10, 1);
    const listNum = [startOfTheReport];
    for (let i = 0; i < getRandomInt(10, 5); i++) {
        startOfTheReport += interval
        listNum.push(startOfTheReport);
    }
    let replacingNumber = getRandomInt(listNum.length);
    let requiredNumber = listNum[replacingNumber]
    listNum[replacingNumber] = '..';
    let string = '';
    for (let item of listNum) {
        string += `${item} `
    }
    return [string, `${requiredNumber}`];
}

brainProgression()
