'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;
let number = document.querySelector('.number');
let scoreNumber = document.querySelector('.score');
let body = document.querySelector('body');

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
  let guess = Number (document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('🤖 Enter a number!');

    // when player wins
  } else if (guess === secretNumber) {
    number.textContent = secretNumber;
    displayMessage('😺 Correct Number!');
    score++;
    scoreNumber.textContent = score;

    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }

    // when guess is wrong

  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreNumber.textContent = score;
    } else {
      displayMessage('🐒 Game Over');
      scoreNumber.textContent = 0;
    }
  }
});

// reset the game

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random()*20) + 1;

  scoreNumber.textContent = 'score';
  number.textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';

});


