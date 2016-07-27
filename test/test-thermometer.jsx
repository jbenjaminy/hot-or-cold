/*---------- DEPENDENCIES ----------*/
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Thermometer = require('../js/thermometer');

/*---------- TEST RENDER ----------*/
var renderer = TestUtils.createRenderer();
renderer.render(<Thermometer thermAmount={16}/>);

/*---------- VARIABLES ----------*/
var thermometer = renderer.getRenderOutput();

/*----------- TESTS -----------*/
describe('Thermometer', function() {
  it('Renders the thermometer component with a given percentage', function() {
    thermometer.type.should.equal('div');
    thermometer.props.className.should.equal('thermometer');
    var glass = thermometer.props.children[0];
    glass.type.should.equal('span');
    glass.props.className.should.equal('glass');

    var filler = glass.props.children[5];
    filler.type.should.equal('span');
    filler.props.className.should.equal('amount');
    filler.props.style.height.should.equal('16%');

    var bulb = thermometer.props.children[1];
    bulb.type.should.equal('div');
    bulb.props.className.should.equal('bulb');
  });
});