// import functions and grab DOM elements
import { getComputerThrow } from './utils.js';
import { didUserWin } from './utilis.js';

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const winResults = document.getElementById('wins');
const loseResults = document.getElementById('lose');
const drawResults = document.getElementById('draws');
const totalResults = document.getElementById('total');
const results = document.getElementById('results');

//makesure to console. these tomorrow

console.log(playButton, resetButton, winResults, loseResults, drawResults, totalResults, results)

// initialize state
let wins = 0;
let lose = 0;
let draws = 0;
let total = wins + lose + draws;


// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const alexaNumber = Math.ceil(Math.random()) * 3;
    const alexaValue = getComputerThrow (alexaNumber)



}