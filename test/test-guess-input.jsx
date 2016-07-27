// /*---------- DEPENDENCIES ----------*/
// var React = require('react');
// var TestUtils = require('react-addons-test-utils');
// var should = require('chai').should();

// var GuessInput = require('../js/guess-input');

// /*---------- TEST RENDER ----------*/
// var renderer = TestUtils.createRenderer();
// renderer.render(<GuessInput inputValue='1'/>);

// /*---------- VARIABLES ----------*/
// var result = renderer.getRenderOutput();
// var guessInput = result;
// console.log(guessInput);

// ----------- TESTS -----------
// describe('GuessInput', function() {
// 	it('Renders a guess-input component with a text input', function() {
// 		result.type.should.equal('h3');
// 		result.props.children.should.be.a('string');
// 		result.props.children.should.equal('You got it!');
// 	});
// 	it('Renders a guess-input component with a button', function() {
// 		result.type.should.equal('h3');
// 		result.props.children.should.be.a('string');
// 		result.props.children.should.equal('You got it!');
// 	});
// });