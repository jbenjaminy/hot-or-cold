/*---------- DEPENDENCIES ----------*/
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var PreviousGuess = require('../js/previous-guess');

/*---------- TEST RENDER ----------*/
var renderer = TestUtils.createRenderer();

/*----------- TESTS -----------*/
describe('Previous Guesses', function() {
  it('Renders the previous guess component with an empty array', function() {
    renderer.render(<PreviousGuess array={[]}/>);
    var previousGuess = renderer.getRenderOutput();
    previousGuess.type.should.equal('ul');
    previousGuess.props.children.length.should.equal(0);
  });
  it('Renders the previous guess component with an array of numbers', function() {
    renderer.render(<PreviousGuess array={[5, 3]}/>);
    var previousGuess = renderer.getRenderOutput();
    
    var liChildren = previousGuess.props.children;
    liChildren.length.should.equal(2);
    liChildren[0].type.should.equal('li');
    liChildren[0].props.children.should.equal(5);
    liChildren[1].type.should.equal('li');
    liChildren[1].props.children.should.equal(3);
  });
});