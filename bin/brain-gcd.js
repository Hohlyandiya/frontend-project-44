#!/usr/bin/env node

import brainGCD from '../src/games/brain-gcd.js';
import startBrainGame from './game.js';

const getBeginGameBrainGCD = () => startBrainGame(brainGCD, 'Find the greatest common divisor of given numbers.');

getBeginGameBrainGCD();
