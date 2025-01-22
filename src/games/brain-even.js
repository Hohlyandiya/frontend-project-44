import runGameEngine from '../index.js';
import getRandomNum from '../random.js';

const runBrainEven = () => {
  const getAnswerAndExpression = () => {
    const limitNumber = 100;
    const randomNum = getRandomNum(limitNumber);
    const expression = randomNum;
    const answer = randomNum % 2 === 0 ? 'yes' : 'no';
    const result = [answer, expression];
    return result;
  };
  const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGameEngine(getAnswerAndExpression, descriptionGame);
};

export default runBrainEven;
