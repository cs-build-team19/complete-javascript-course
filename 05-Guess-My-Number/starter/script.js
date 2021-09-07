'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct Coverage!'

// document.querySelector('.number').textContent = 4
// document.querySelector('.score').textContent = 15
// document.querySelector('.guess').value = 4




/* Game functionality */

let coverage = Math.trunc(Math.random() * 6) + 1
console.log(coverage)
let score = 5;
let highscore = 0;
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}
const displayScore = (score) => {
    document.querySelector('.score').textContent = score
}

/* Code chakkenge 1 DOM/Event handlser */

// resets the game(play again button function)
document.querySelector('.again').addEventListener('click', function() {
    displayScore(5)
    coverage = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.message').textContent = 'Pick a coverage.';
    displayMessage('Pick a coverage.')
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.guess').value = ''
})

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    // if no coveage is picked
    if(!guess) {
        // document.querySelector('.message').textContent = 'Pick a coverage.';
        displayMessage('Pick a Coverage.')

    // if correct coverage is picked
    } else if(guess === coverage) {
        if(score > 1) {
            // document.querySelector('.message').textContent = 'Correct!';
            displayMessage('Correct!')
            score++
            // document.querySelector('.score').textContent = score;
            displayScore(score)
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = coverage;
            document.querySelector('.number').style.width = '30rem'

            if(score > highscore) {
                highscore = score
                document.querySelector('.highscore').textContent = highscore;
            }
        } else {
            //  document.querySelector('.message').textContent = 'Study!';
            displayMessage('Study!')
            //  document.querySelector('.score').textContent = 0;
            displayScore(0)
        }

    // if incorrect coverage is picked
    } else if (guess !== coverage) {
        if(score > 1) {
            // document.querySelector('.message').textContent = 'Not the coverage!';
            displayMessage('Not the coverage!')
            score--
            // document.querySelector('.score').textContent = score;  
            displayScore(score)
        } else {
            // document.querySelector('.message').textContent = 'Study!'
            displayMessage('Study!')
            // document.querySelector('.score').textContent = 0;
            displayScore(0)
        }
    }
})



