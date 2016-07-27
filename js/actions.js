/* ------- ACTIONS --------- */

/**
  * Action to make a new game
 */
const NEW_GAME = 'NEW_GAME';
var newGame = function() {
  return {
    type: NEW_GAME
  };
};

/**
  * Action to make a new guess
 */
const MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function() {
  return {
    type: MAKE_GUESS
  };
};

/**
  * Action to view instructions overlay
 */
const MANAGE_OVERLAY = 'MANAGE_OVERLAY';
var manageOverlay = function() {
	return {
		type: MANAGE_OVERLAY,
	};
};

/**
 * Action to update user's input value
 * @inputValue - parameter representing the user's input value, 
 * passed to the reducer to be stored as state
 */
const CHANGE_VALUE = 'CHANGE_VALUE';
var changeValue = function(inputValue) {
  return {
    type: CHANGE_VALUE,
    inputValue: inputValue
  };
};

/*------- EXPORTS -------*/
exports.MANAGE_OVERLAY = MANAGE_OVERLAY;
exports.manageOverlay = manageOverlay;
exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.CHANGE_VALUE = CHANGE_VALUE;
exports.changeValue = changeValue;