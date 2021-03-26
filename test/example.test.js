// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { didUserWin } from '../utils.js';

const test = QUnit.test;



test('if user selects rock and alexa chooses paper should return lose', (expect) => {
    const player = 'rock';
    const alexa = 'paper';
    const actual = didUserWin(player, alexa);
    
    expect.equal(actual, 'lose', 'Rock vs paper is lose');

});

test('if user selects rock and alexa chooses scissors should return win', (expect) => {
    const player = 'rock';
    const alexa = 'scissors';
    const actual = didUserWin(player, alexa);
    
    expect.equal(actual, 'win', 'Rock vs scissors is win');

});

test('if user selects paper and alexa chooses scissors should return lose', (expect) => {
    const player = 'paper';
    const alexa = 'scissors';
    const actual = didUserWin(player, alexa);
    
    expect.equal(actual, 'lose', 'paper vs scissors is lose');

});

test('if user selects paper and alexa chooses rock should return win', (expect) => {
    const player = 'paper';
    const alexa = 'rock';
    const actual = didUserWin(player, alexa);
    
    expect.equal(actual, 'win', 'paper vs rock is win');

});

test('if user selects scissors and alexa chooses rock should return lose', (expect) => {
    const player = 'scissors';
    const alexa = 'rock';
    const actual = didUserWin(player, alexa);
    
    expect.equal(actual, 'lose', 'scissors vs rock is lose');
    
});

test('if user selects scissors and alexa chooses paper should return win', (expect) => {
    const player = 'scissors';
    const alexa = 'paper';
    const actual = didUserWin(player, alexa);
    
    expect.equal(actual, 'win', 'scissors vs paper is win');

});

test('if user selects rock and alexa chooses rock should return draw', (expect) => {
    const player = 'rock';
    const alexa = 'rock';
    const actual = didUserWin(player, alexa);
    
    expect.equal(actual, 'draw', 'Rock vs rock is draw');

}); 

test('if user selects rock and alexa chooses rock should return draw', (expect) => {
    const player = 'paper';
    const alexa = 'paper';
    const actual = didUserWin(player, alexa);
    
    expect.equal(actual, 'draw', 'paper vs paper is draw');

});

test('if user selects scissors and alexa chooses scissors should return draw', (expect) => {
    const player = 'scissors';
    const alexa = 'scissors';
    const actual = didUserWin(player, alexa);
    
    expect.equal(actual, 'draw', 'scissors vs scissors is draw');

});