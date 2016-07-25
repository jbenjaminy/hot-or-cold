/* ------- ACTIONS --------- */
const MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function(userGuess) {
  return {
    type: MAKE_GUESS,
    guess: userGuess
  };
};

const NEW_GAME = 'NEW_GAME';
var newGame = function() {
  return {
    type: NEW_GAME
  };
};

exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;