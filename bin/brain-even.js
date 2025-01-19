#!/usr/bin/env node

import brainEven from '../src/games/brain-even.js';
import startBrainGame from './game.js';

const getBeginGameBrainEven = () => startBrainGame(brainEven, 'Answer "yes" if the number is even, otherwise answer "no".');

getBeginGameBrainEven();
