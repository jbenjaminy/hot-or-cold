var actions = require('./actions');

var combineReducers = require('redux').combineReducers;

/* ------- Reducers ------ */
var gameReducer = function(state, action) {
  state = state || {};
  if(action.type === actions.NEW_GAME) {
    var randomNum = Math.floor((Math.random() * 100) + 1);
    var initialFeedback = 'Make your Guess';
    var initialGuessList = [];

    return Object.assign({}, {
      randomNum: randomNum, 
      feedback: initialFeedback,
      previousGuesses: initialGuessList});

  } else if(action.type === actions.MAKE_GUESS) {
    var difference = Math.abs(action.guess - state.randomNum);
    var feedback = '';
    console.log(difference, 'difference');
    if (state.previousGuesses.length === 0) {
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
    } else {
      var prevGuess = state.previousGuesses[state.previousGuesses.length - 1];
      var prevDifference = Math.abs(prevGuess - state.randomNum);
      console.log(prevDifference, 'prevDifference');
      if (difference === 0) {
        feedback = 'You got it!';
      } else if (difference > prevDifference) {
        feedback = 'Colder';
      } else if (difference < prevDifference) {
        feedback = 'Warmer';
      } else {
        feedback = 'No change';
      }
    }

    var newState = Object.assign({}, state);
    newState.feedback = feedback;
    newState.previousGuesses = state.previousGuesses.concat(action.guess);

    return newState;
  } else {
    return state;
  }
};
       
var manageOverlayReducer = function(state, action) {
  state = state || false;
  if(action.type === actions.MANAGE_OVERLAY) {
    var newOverlay = !state;

    return newOverlay;
  } else {
    return state;
  }
};

var reducer = combineReducers({
  game: gameReducer,
  manageOverlay: manageOverlayReducer
});

exports.reducer = reducer;