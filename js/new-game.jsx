var React = require('react');

var NewGame = function (props) {
	return <button onClick={props.restart}>New Game</button>
};

module.exports = NewGame;