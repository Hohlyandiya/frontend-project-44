import readlineSync from 'readline-sync';

const getNameUser = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  return nameUser;
};

export default getNameUser;
