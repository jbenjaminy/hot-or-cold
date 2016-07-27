/* ------- ACTIONS --------- */
const NEW_GAME = 'NEW_GAME';
var newGame = function() {
  return {
    type: NEW_GAME
  };
};

const MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function() {
  return {
    type: MAKE_GUESS
  };
};

const MANAGE_OVERLAY = 'MANAGE_OVERLAY';
var manageOverlay = function() {
	return {
		type: MANAGE_OVERLAY,
	};
};

const CHANGE_VALUE = 'CHANGE_VALUE';
var changeValue = function(inputValue) {
  return {
    type: CHANGE_VALUE,
    inputValue: inputValue
  };
};

exports.MANAGE_OVERLAY = MANAGE_OVERLAY;
exports.manageOverlay = manageOverlay;
exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.CHANGE_VALUE = CHANGE_VALUE;
exports.changeValue = changeValue;