import brainPrime from '../src/games/brain-prime.js';
import startBrainGame from './game.js';

const getBeginGameBrainPrime = () => startBrainGame(brainPrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');

getBeginGameBrainPrime();
