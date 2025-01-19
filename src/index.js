import readlineSync from 'readline-sync';

const getResultBrainGame = (answer, expression) => {
  let count = 0;
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (answer === userAnswer) {
    console.log('Correct!');
    count = 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    count = -1;
  }

  return count;
};

export default getResultBrainGame;
