let initialMax = 8;
let rangeStep = 4;
let attempts = 3;
let round = 0;
let totalPrize = 0;
let initialPrizes = [50, 25, 12.5];

let startGame = confirm('Do you want to play a game?');
if (startGame === false) {
  alert('You did not become a billionaire, but can.');
} else {
  startRound();
}

function startRound() {
  let roundMax = initialMax + rangeStep * round;
  round++;
  let randomNumber = pickNumber(roundMax);
  for (let i = 0; i < attempts; i++) {
    let attemptPrize = initialPrizes[i] * Math.pow(2, round);
    let guess = getGuess(roundMax, attempts - i, totalPrize, attemptPrize);
    console.log(randomNumber);
    if (guess === randomNumber) {
      totalPrize += attemptPrize;
      alert('Congratulation, you won! Your prize is: ' + totalPrize + '$.');
      break;
    }

    // last try
    if (i === attempts - 1) {
      round = 0;
      endGame();
    }
  }

  let startNextRound = confirm('Would you like to play again?');
  if (startNextRound) {
    startRound();
  } else {
    endGame();
  }
}

function pickNumber(max) {
  let min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getGuess(max, attemptsLeft, totalPrize, possiblePrize) {
  let guess = +prompt(
    'Choose a roulette pocket number from 0 to ' +
      max +
      '\n' +
      'Attempts left: ' +
      attemptsLeft +
      '\n' +
      'Total prize: ' +
      totalPrize +
      '$' +
      '\n' +
      'Possible prize on current attempt: ' +
      possiblePrize +
      '$'
  );
  if (guess) {
    return guess;
  } else {
    endGame();
  }
}

function endGame() {
  alert(
    'Thank you for your participation. Your prize is: ' + totalPrize + '$.'
  );
}
