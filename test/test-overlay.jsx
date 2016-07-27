/*---------- DEPENDENCIES ----------*/
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Overlay = require('../js/overlay');

/*---------- TEST RENDER ----------*/
var renderer = TestUtils.createRenderer();

/*----------- TESTS -----------*/
describe('Overlay', function() {
  it('Renders the overlay component when instructions are hidden', function() {
    renderer.render(<Overlay isVisible={false} />);
    var overlay = renderer.getRenderOutput();
    var button = overlay.props.children[0];
    var instructionsDiv = overlay.props.children[1];

    overlay.type.should.equal('div');
    overlay.props.className.should.equal('header-buttons');    
    button.type.should.equal('button');
    button.props.className.should.equal('');
    button.props.children.should.equal('Instructions');
    instructionsDiv.type.should.equal('div');
    instructionsDiv.props.className.should.equal('instructions hidden');
    instructionsDiv.props.children[0].type.should.equal('h3');
    instructionsDiv.props.children[0].props.children.should.equal('What do I do?');
    instructionsDiv.props.children[1].type.should.equal('p');
    instructionsDiv.props.children[1].props.children.should.equal('This is a Hot or Cold Number Guessing Game. The game goes like this: ');
    instructionsDiv.props.children[2].type.should.equal('ul');
    instructionsDiv.props.children[2].props.children.length.should.equal(3);
    instructionsDiv.props.children[3].type.should.equal('p');
    instructionsDiv.props.children[3].props.children.should.equal('So, Are you ready?');
    instructionsDiv.props.children[4].type.should.equal('button');
    instructionsDiv.props.children[4].props.children.should.equal('Got It!');
  });

  it('Renders the overlay component when instructions are visible', function() {
    renderer.render(<Overlay isVisible={true} />);
    var overlay = renderer.getRenderOutput();
    var button = overlay.props.children[0];
    var instructionsDiv = overlay.props.children[1];

    overlay.type.should.equal('div');
    overlay.props.className.should.equal('header-buttons');    
    button.type.should.equal('button');
    button.props.className.should.equal('hidden');
    button.props.children.should.equal('Instructions');
    instructionsDiv.type.should.equal('div');
    instructionsDiv.props.className.should.equal('instructions');
    instructionsDiv.props.children[0].type.should.equal('h3');
    instructionsDiv.props.children[0].props.children.should.equal('What do I do?');
    instructionsDiv.props.children[1].type.should.equal('p');
    instructionsDiv.props.children[1].props.children.should.equal('This is a Hot or Cold Number Guessing Game. The game goes like this: ');
    instructionsDiv.props.children[2].type.should.equal('ul');
    instructionsDiv.props.children[2].props.children.length.should.equal(3);
    instructionsDiv.props.children[3].type.should.equal('p');
    instructionsDiv.props.children[3].props.children.should.equal('So, Are you ready?');
    instructionsDiv.props.children[4].type.should.equal('button');
    instructionsDiv.props.children[4].props.children.should.equal('Got It!');
  });
});
