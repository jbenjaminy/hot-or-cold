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
    newState.feedback = feedback;
    newState.previousGuesses = newGuessList;

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