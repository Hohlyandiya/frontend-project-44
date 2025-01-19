import readlineSync from 'readline-sync';

const getResultBrainGame = (nameUser, answer, expression) => {
  let count = 0;
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (answer === userAnswer) {
    console.log('Correct!');
    count = 1;
  } else {
    console.log(`Your answer: '${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${nameUser}!`);
    count = 0;
  }

  return count;
};

export default getResultBrainGame;
