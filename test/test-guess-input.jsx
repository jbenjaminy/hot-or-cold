/*---------- DEPENDENCIES ----------*/
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var GuessInput = require('../js/guess-input').GuessInput;


/*---------- TEST RENDER ----------*/
var renderer = TestUtils.createRenderer();
renderer.render(<GuessInput inputValue='1'/>);

/*---------- VARIABLES ----------*/
var result = renderer.getRenderOutput();
var guessInput = result;
var input = guessInput.props.children[0];
var button = guessInput.props.children[1];

/*----------- TESTS -----------*/
describe('Guess-input', function() {
	it('Renders a guess-input component with a text input', function() {
		guessInput.type.should.equal('form');
		guessInput.props.children.length.should.equal(2);
		input.type.should.equal('input');
		input.props.type.should.equal('number');
		input.props.placeholder.should.equal('Guess a number between 1-100');
		input.props.value.should.equal('1');
	});
	it('Renders a guess-input component with a button', function() {
		button.type.should.equal('button');
		button.props.type.should.equal('submit');
		button.props.children.should.equal('Make Guess');
	});
});