export const getResultBrainEven = (nameUser, check, userAnswer, answer) => {
    if (check) {
        console.log('Correct!');
        return 1;
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \n Let's try again, ${nameUser}`)
        return 0;
    }  
}