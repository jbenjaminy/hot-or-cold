/*---------- DEPENDENCIES ----------*/
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var GuessNumber = require('../js/guess-number');

/*---------- TEST RENDER ----------*/
var renderer = TestUtils.createRenderer();
renderer.render(<GuessNumber text='4'/>);

/*---------- VARIABLES ----------*/
var result = renderer.getRenderOutput();
var guessNumber = result;

/*----------- TESTS -----------*/
describe('GuessNumber', function() {
	it('Renders a guess-number component with a text', function() {
		guessNumber.type.should.equal('h3');
		guessNumber.props.children.should.be.a('array');
		guessNumber.props.children[0].should.be.a('string');
		guessNumber.props.children[1].should.be.a('string');
		guessNumber.props.children[0].should.equal('# of Guesses: ');
		guessNumber.props.children[1].should.equal('4');
	});
});
