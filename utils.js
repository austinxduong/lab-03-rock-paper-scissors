export function getComputerThrow() {
    let randomNumber = Math.ceil(Math.random()) * 3;
    let alexa = '';
    if (randomNumber === 1) {
        alexa = 'rock';
    }
    if (randomNumber === 2) {
        alexa = 'paper';
    }
    if (randomNumber === 3) {
        alexa = 'scissors';
    }

}


export function didUserWin(player, alexa) {
    if (player === 'rock' && alexa === 'paper'){
        return 'lose';}
    else if (player === 'rock' && alexa === 'scissors'){
        return 'win';}
    else if (player === 'paper' && alexa === 'rock'){
        return 'win';}
    else if (player === 'paper' && alexa === 'scissors'){
        return 'lose';}
    else if (player === 'scissors' && alexa === 'rock'){
        return 'lose';}
    else if (player === 'scissors' && alexa === 'paper'){
        return 'win';}
    else {return 'draw';}

}
