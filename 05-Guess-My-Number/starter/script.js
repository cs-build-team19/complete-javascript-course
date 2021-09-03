'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct Coverage!'

// document.querySelector('.number').textContent = 4
// document.querySelector('.score').textContent = 15
// document.querySelector('.guess').value = 4

const coverage = Math.trunc(Math.random() * 20) + 1
console.log(coverage)
let score = 5;

document.querySelector('.number').textContent = coverage;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    if(!guess) {
        document.querySelector('.message').textContent = 'Pick a coverage.';
    } else if(guess === coverage) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Correct!';
            score++
            document.querySelector('.score').textContent = score;
        } else {
             document.querySelector('.message').textContent = 'Study!';
             document.querySelector('.score').textContent = 0;
        }
        
    } else if (guess !== coverage) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Not the coverage!';
            score--
            document.querySelector('.score').textContent = score;  
        } else {
            document.querySelector('.message').textContent = 'Study!'
            document.querySelector('.score').textContent = 0;
        }
    }
})