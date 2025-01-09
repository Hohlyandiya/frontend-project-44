import readlineSync from 'readline-sync/lib/readline-sync.js';

export const getResultBrainGame = (nameUser, answer, expression) => {
    console.log(`Question: ${expression}`);
    let userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
        console.log('Correct!');
        return 1;
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \n Let's try again, ${nameUser}`)
        return 0;
    }  
}