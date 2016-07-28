var React = require('react');

/**
 * Component for rendering the feedback string 
 * in a response to the user's guess.
 * @constructor
 * @param {Object} props Contains a property for the user's feedback
 */
var Feedback = function (props) {
	return <h3 className="feedback">{props.text}</h3>
};

module.exports = Feedback;