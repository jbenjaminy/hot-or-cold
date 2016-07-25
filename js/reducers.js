var actions = require('./actions');

var initialGameState = {};

/* ------- Reducers ------ */
var gameReducer = function (state, action) {
  state = state || initialGameState;

  if(action.type === actions.NEW_GAME) {
    var randomNum = Math.floor((Math.random() * 100) + 1);
    var initialFeedback = 'Make your Guess';
    var initialUserGuess = '';
    var initialGuessCount = 0;
    var initialGuessList = [];

    return Object.assign({}, {
      randomNum: randomNum, 
      guess: initialUserGuess, 
      guessCount: initialGuessCount,
      feedback: initialFeedback,
      previousGuesses: initialGuessList });
  } else if (action.type === actions.MAKE_GUESS) {
    var difference = Math.abs(action.guess - state.randomNum);
    var feedback = '';
    var newGuessList = state.previousGuesses.concat(action.guess);

    if (difference >= 50) {
      feedback = 'Ice Cold!';
    } else if (difference >= 30) {
      feedback = 'Cold';
    } else if (difference >= 10) {
      feedback = 'Warm';
    } else if (difference >= 1) {
      feedback = 'Very HOT!';
    } else {
      feedback = 'You got it!';
    }
    var newState = Object.assign({}, state);
    newState.guess = action.guess;
    newState.guessCount = state.guessCount + 1;
    newState.feedback = feedback;
    newState.previousGuesses = newGuessList;

    return newState;
  }
};