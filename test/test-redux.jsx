/*---------- DEPENDENCIES ----------*/
var React = require('react');
var should = require('chai').should();
var actions = require('../js/actions');
var reducers = require('../js/reducers');
var store = require('../js/store');

/*----------- TESTS -----------*/
describe('Test Game', function() {
  	it('Creates a new game with initial state', function() {
  		store.dispatch(actions.newGame());
  		var initialState = store.getState();
  		initialState.game.feedback.should.equal('Make your Guess');
  		initialState.game.feedback.should.be.a('string');
  		initialState.game.previousGuesses.length.should.equal(0);
  		initialState.game.previousGuesses.should.be.a('array');
  		initialState.game.thermAmount.should.equal(0);
  		initialState.game.thermAmount.should.be.a('Number');
  		initialState.game.inputValue.should.equal('');
  		initialState.game.inputValue.should.be.a('string');
  		initialState.manageOverlay.should.equal(false);
  		initialState.manageOverlay.should.be.a('Boolean');
  	});

  	it('Updates state for each guess', function() {
  		var initialState = store.getState();
  		var randomNum = initialState.game.randomNum;
  		var guess = 50;
  		var feedback = '';
  		var thermAmount = 0;
  		var difference = Math.abs(guess - randomNum);
  			if (difference >= 50) {
	        feedback = 'You\'re Ice Cold...';
	        thermAmount = 16;
	      } else if (difference >= 30) {
	        feedback = 'You\'re Cold...';
	        thermAmount = 36;
	      } else if (difference >= 10) {
	        feedback = 'You\'re Warm';
	        thermAmount = 56;
	      } else if (difference >= 1) {
	        feedback = 'You\'re Hot!';
	        thermAmount = 76;
	      } else {
	        feedback = 'You got it!';
	        thermAmount = 96;
	      }
  		store.dispatch(actions.changeValue(guess));
  		store.dispatch(actions.makeGuess());
  		var updatedState = store.getState();

  		updatedState.game.feedback.should.equal(feedback);
  		updatedState.game.feedback.should.be.a('string');
  		updatedState.game.previousGuesses.length.should.equal(1);
  		updatedState.game.previousGuesses.should.be.a('array');
  		updatedState.game.previousGuesses[0].should.equal(50);
  		updatedState.game.thermAmount.should.equal(thermAmount);
  		updatedState.game.thermAmount.should.be.a('Number');
  		updatedState.game.inputValue.should.equal('');
  		updatedState.game.inputValue.should.be.a('string');
  		updatedState.manageOverlay.should.equal(false);
  		updatedState.manageOverlay.should.be.a('Boolean');

  		if (guess > randomNum) {
  			var colderGuess = 55;
  		} else {
  			colderGuess = 45;
  		}
  		store.dispatch(actions.changeValue(colderGuess));
  		store.dispatch(actions.makeGuess());
  		updatedState = store.getState();

  		updatedState.game.feedback.should.equal('Getting Colder...');
  		updatedState.game.feedback.should.be.a('string');
  		updatedState.game.previousGuesses.length.should.equal(2);
  		updatedState.game.previousGuesses.should.be.a('array');
  		updatedState.game.previousGuesses[0].should.equal(50);
  		updatedState.game.previousGuesses[1].should.equal(colderGuess);
  		updatedState.game.inputValue.should.equal('');
  		updatedState.game.inputValue.should.be.a('string');
  		updatedState.manageOverlay.should.equal(false);
  		updatedState.manageOverlay.should.be.a('Boolean');
  	});

  	it('Does not allow for invalid guesses', function() {
  		store.dispatch(actions.changeValue('abc'));
  		store.dispatch(actions.makeGuess());
  		var updatedState = store.getState();
  		updatedState.game.feedback.should.equal('Please enter a valid number');
  		updatedState.game.feedback.should.be.a('string');
  		updatedState.game.previousGuesses.length.should.equal(2);
  		updatedState.game.previousGuesses.should.be.a('array');
  		updatedState.game.inputValue.should.equal('abc');
  		updatedState.game.inputValue.should.be.a('string');
  		updatedState.manageOverlay.should.equal(false);
  		updatedState.manageOverlay.should.be.a('Boolean');

  		store.dispatch(actions.changeValue(''));
  		store.dispatch(actions.makeGuess());
  		updatedState = store.getState();
  		updatedState.game.feedback.should.equal('Please enter a valid number');
  		updatedState.game.feedback.should.be.a('string');
  		updatedState.game.previousGuesses.length.should.equal(2);
  		updatedState.game.previousGuesses.should.be.a('array');
  		updatedState.game.inputValue.should.equal('');
  		updatedState.game.inputValue.should.be.a('string');
  		updatedState.manageOverlay.should.equal(false);
  		updatedState.manageOverlay.should.be.a('Boolean');
  	});

  	it('Resets state on new game', function() {
  		store.dispatch(actions.newGame());
  		var initialState = store.getState();
  		initialState.game.feedback.should.equal('Make your Guess');
  		initialState.game.feedback.should.be.a('string');
  		initialState.game.previousGuesses.length.should.equal(0);
  		initialState.game.previousGuesses.should.be.a('array');
  		initialState.game.thermAmount.should.equal(0);
  		initialState.game.thermAmount.should.be.a('Number');
  		initialState.game.inputValue.should.equal('');
  		initialState.game.inputValue.should.be.a('string');
  		initialState.manageOverlay.should.equal(false);
  		initialState.manageOverlay.should.be.a('Boolean');
  	});

  	it('Updates state for overlay components', function() {
  		store.dispatch(actions.manageOverlay());
  		var updatedState = store.getState();

  		updatedState.manageOverlay.should.equal(true);
  		updatedState.manageOverlay.should.be.a('Boolean');
  	});
});
