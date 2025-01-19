import getNameUser from '../src/cli.js';

const startBrainGame = (game, nameGame) => {
  const nameUser = getNameUser();
  console.log(nameGame);
  let count = 0;
  while (count < 3) {
    const result = game(nameUser);
    count = result !== 0 ? count += result : count = 0;
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default startBrainGame;
