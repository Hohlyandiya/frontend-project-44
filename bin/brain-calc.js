#!/usr/bin/env node

import brainCalc from '../src/games/brain-calc.js';
import startBrainGame from './game.js';

const getBeginGameBrainCalc = () => startBrainGame(brainCalc, 'What is the result of the expression?');

getBeginGameBrainCalc();
