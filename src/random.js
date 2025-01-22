const getRandomNum = (num, num2 = 0) => Math.floor(Math.random() * (num - num2) + num2);

export default getRandomNum;
