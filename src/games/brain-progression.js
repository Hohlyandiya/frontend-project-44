import runGameEngine from '../index.js';
import getRandomNum from '../random.js';

const getArray = () => {
  const limitNumber = 100;
  let startOfTheReport = getRandomNum(limitNumber);
  const interval = getRandomNum(10, 1);
  const maxLength = getRandomNum(10, 5);
  const listNum = [startOfTheReport];
  for (let i = 0; i < maxLength; i += 1) {
    startOfTheReport += interval;
    listNum.push(startOfTheReport);
  }
  return listNum;
};

const runBrainProgression = () => {
  const getAnswerAndExpression = () => {
    const arr = getArray();
    const answer = `${arr[getRandomNum(arr.length)]}`;
    arr[arr.indexOf(Number(answer))] = '..';
    const expression = arr.join(' ');
    const result = [answer, expression];
    return result;
  };
  const descriptionGame = 'What number is missing in the progression?';
  runGameEngine(getAnswerAndExpression, descriptionGame);
};

export default runBrainProgression;
