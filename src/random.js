export const getRandomInt = (num, num2 = 0) => {
    return Math.floor(Math.random() * (num - num2) + num2);
}