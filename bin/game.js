import { getNameUser } from "../src/cli.js";

export const startBrainGame = (game, nameGame) => {
    const nameUser = getNameUser();
    console.log(nameGame);
    let count = 0;
    while (count < 3) {
        let result = game(nameUser);
        result !== 0 ? count += result : count = 0;
    }
    console.log(`Congratulations, ${nameUser}`);
}