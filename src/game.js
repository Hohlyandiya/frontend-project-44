import {getNameUser} from "../src/cli.js";

export const startBrainGame = (game, nameGame) => {
    const nameUser = getNameUser();
    let count = 0;
    switch (nameGame) {
        case 'brainEven':
            console.log('Answer "yes" if the number is even, otherwise answer "no".');
            break;
        case 'brainCalc':
            console.log('What is the result of the expression?');
            break;
        case 'brainGCD':
            console.log('Find the greatest common divisor of given numbers.')
            break;
        case 'brainPrime':
            console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
            break;
        case 'brainProgression':
            console.log('What number is missing in the progression?')
            break;
    }
    while (count < 3) {
        let result = game(nameUser);
        result !== 0 ? count += result : count = 0;
    }
    console.log(`Congratulations, ${nameUser}`);
}