/*---------- DEPENDENCIES ----------*/
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Feedback = require('../js/feedback');

/*---------- TEST RENDER ----------*/
var renderer = TestUtils.createRenderer();
renderer.render(<Feedback text='You got it!'/>);

/*---------- VARIABLES ----------*/
var result = renderer.getRenderOutput();
var feedback = result;

/*----------- TESTS -----------*/
describe('Feedback', function() {
	it('Renders a feedback component with a text', function() {
		feedback.type.should.equal('h3');
		feedback.props.children.should.be.a('string');
		feedback.props.children.should.equal('You got it!');
	});
});
