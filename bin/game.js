import getNameUser from '../src/cli.js';

const startBrainGame = (game, nameGame) => {
  const nameUser = getNameUser();
  console.log(nameGame);
  let count = 0;
  while (count < 3 && count >= 0) {
    const result = game(nameUser);
    count = result !== 0 ? count += result : count = 0;
  }
  const result = count !== 3 ? `Let's try again, ${nameUser}!` : `Congratulations, ${nameUser}!`;
  console.log(result);
};

export default startBrainGame;
