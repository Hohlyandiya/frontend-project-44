import runGameEngine from '../index.js';
import getRandomNum from '../random.js';

const getArray = (startOfTheReport, interval, maxLength) => {
  let beginningReport = startOfTheReport;
  const listNum = [beginningReport];
  for (let i = 0; i < maxLength; i += 1) {
    beginningReport += interval;
    listNum.push(beginningReport);
  }
  return listNum;
};

const runBrainProgression = () => {
  const getAnswerAndExpression = () => {
    const limitNumber = 100;
    const startOfTheReport = getRandomNum(limitNumber);
    const interval = getRandomNum(10, 1);
    const maxLength = getRandomNum(10, 5);
    const arr = getArray(startOfTheReport, interval, maxLength);
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
