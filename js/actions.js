/* ------- ACTIONS --------- */
const NEW_GAME = 'NEW_GAME';
var newGame = function() {
  return {
    type: NEW_GAME
  };
};

const MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function(userGuess) {
  return {
    type: MAKE_GUESS,
    guess: userGuess
  };
};

const MANAGE_OVERLAY = 'MANAGE_OVERLAY';
var manageOverlay = function() {
	return {
		type: MANAGE_OVERLAY,
	};
};

exports.MANAGE_OVERLAY = MANAGE_OVERLAY;
exports.manageOverlay = manageOverlay;
exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;