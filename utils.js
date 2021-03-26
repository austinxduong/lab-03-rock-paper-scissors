export function getComputerThrow(randomNumber) {
        let randomNumber = Math.ceil(Math.random()) *3;
        let handShape
        if (randomNumber === 1) {
            handShape = 'rock'
    }
    if(randomNumber === 2) {
            handShape = 'paper'
    }
    if (randomNumber === 3) {
        handShape = 'scissors'
    }
    return handShape;
}


export function didUserWin(play, computer) {
    if player === 'rock' && computer === 'paper') {
        return 'lose';
