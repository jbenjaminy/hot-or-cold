var React = require('react');

var PreviousGuesses = function (props) {
	var list = props.array.map(
		function(guess, index) {
			return <li key={index}>{guess}</li>
	});

	return <ul>{list}</ul>
};
module.exports = PreviousGuesses;