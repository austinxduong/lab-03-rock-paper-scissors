import { didUserWin } from '../utils.js';

const test = QUnit.test;



test('if user selects rock and alexa chooses paper should return lose', (expect) => {
    const player = 'rock';
    const alexa = 'paper';
    const actual = didUserWin(player, alexa);
    
    expect.equal(actual, 'lose', 'Rock vs paper is lose');

});
