import readlineSync from 'readline-sync';

const getNameUser = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  return nameUser;
};

const runGameEngine = (getAnswerAndExpression, descriptionGame) => {
  const nameUser = getNameUser();
  console.log(descriptionGame);
  for (let count = 0; count < 3; count += 1) {
    const [answer, expression] = getAnswerAndExpression();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return console.log(`Let's try again, ${nameUser}!`);
    }
  }
  return console.log(`Congratulations, ${nameUser}!`);
};

export default runGameEngine;
