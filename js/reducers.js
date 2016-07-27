var actions = require('./actions');

var combineReducers = require('redux').combineReducers;

/* ------- Reducers ------ */
var gameReducer = function(state, action) {
  state = state || {};
  if(action.type === actions.NEW_GAME) {
    var randomNum = Math.floor((Math.random() * 100) + 1);
    var initialFeedback = 'Make your Guess';
    var initialGuessList = [];
    var initialThermAmount = 0;

    return Object.assign({}, {
      randomNum: randomNum, 
      feedback: initialFeedback,
      previousGuesses: initialGuessList,
      thermAmount: initialThermAmount
    });


  } else if(action.type === actions.MAKE_GUESS) {
    var difference = Math.abs(action.guess - state.randomNum);
    var feedback = '';
    var thermAmount = 0;
    if (state.previousGuesses.length === 0) {
      if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
      } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
      } else if (difference >= 10) {
        feedback = 'You\'re Warm';
      } else if (difference >= 1) {
        feedback = 'You\'re Hot!';
      } else {
        feedback = 'You got it!';
      }
    } else {
      var prevGuess = state.previousGuesses[state.previousGuesses.length - 1];
      var prevDifference = Math.abs(prevGuess - state.randomNum);
      if (difference === 0) {
        feedback = 'You got it!';
      } else if (difference > prevDifference) {
        feedback = 'Getting Colder...';
      } else if (difference < prevDifference) {
        feedback = 'Getting Warmer!';
      } else {
        feedback = 'No change';
      }
    }
    if (difference >= 50) {
      thermAmount = 16;
    } else if (difference >= 30) {
      thermAmount = 36;
    } else if (difference >= 10) {
      thermAmount = 56;
    } else if (difference >= 1) {
      thermAmount = 76;
    } else {
      thermAmount = 96;
    }

    var newState = Object.assign({}, state);
    newState.feedback = feedback;
    newState.previousGuesses = state.previousGuesses.concat(action.guess);
    newState.thermAmount = thermAmount;

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