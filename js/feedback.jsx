var React = require('react');

/**
 * @Feedback - Component for rendering the feedback string 
 * in a response to the user's guess.
 */
var Feedback = function (props) {
	return <h3 className="feedback">{props.text}</h3>
};

module.exports = Feedback;