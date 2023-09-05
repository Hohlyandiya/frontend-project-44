import readlineSync from '../readline-sync/lib/readline-sync.js'

export const getNameUser = () => {
    const nameUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}`);
    return nameUser;
};