/*---------- DEPENDENCIES ----------*/
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var NewGame = require('../js/new-game');

/*---------- TEST RENDER ----------*/
var renderer = TestUtils.createRenderer();
renderer.render(<NewGame />);

/*---------- VARIABLES ----------*/
var newGame = renderer.getRenderOutput();

/*----------- TESTS -----------*/
describe('NewGame', function() {
  it('Renders a new game button', function() {
    newGame.type.should.equal('div');
    newGame.props.className.should.equal('header-buttons');
    newGame.props.children.type.should.equal('button');
    newGame.props.children.props.children.should.equal('New Game');
  });
});
