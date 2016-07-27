var React = require('react');

var NewGame = function (props) {
	return (
		<div className="header-buttons">
			<button onClick={props.restart}>New Game</button>
		</div>
	);
};

module.exports = NewGame;