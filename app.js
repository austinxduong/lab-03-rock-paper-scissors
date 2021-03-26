// import functions and grab DOM elements
import { getComputerThrow, didUserWin } from './utils.js';
//import { didUserWin } from './utilis.js';

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const winResults = document.getElementById('wins');
const loseResults = document.getElementById('lose');
const drawResults = document.getElementById('draws');
const totalResults = document.getElementById('total');
const results = document.getElementById('results');

//makesure to console. these tomorrow

//console.log(playButton, resetButton, winResults, loseResults, drawResults, totalResults, results)

// initialize state
let wins = 0;
let lose = 0;
let draws = 0;
let total = wins + lose + draws;



// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
   
    const computerChoice = getComputerThrow();
    const selectedRadio = document.querySelector('input:checked');
    //console.log(selectedRadio)
    const userChoice = selectedRadio.value
    console.log(userChoice)

    //const weWon = didUserWin(playerChoice, alexa);

    if (weWon === 'win') {
        wins++;
        //lose++;
        //draw++

    if (weWon == 'lose') {
        lose++;
    
    if (weWon === 'win') {
        draw++;
        




    //}

    //total ++;


    //winsResults.textcontent = wins;
   // totalResults.textContent = total;

});


