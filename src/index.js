import readlineSync from 'readline-sync';

export const getNameUser = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  return nameUser;
};

export const getResultBrainGame = (answer, expression) => {
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

export const startBrainGame = (game, descriptionGame) => {
  const nameUser = getNameUser();
  console.log(descriptionGame);
  let count = 0;
  while (count < 3 && count >= 0) {
    const result = game();
    count = result > 0 ? count += result : count = -1;
  }
  const result = count !== 3 ? `Let's try again, ${nameUser}!` : `Congratulations, ${nameUser}!`;
  console.log(result);
};
