var React = require('react');
var connect = require('react-redux').connect;

var PreviousGuess = require('./previous-guess');
var GuessNumber = require('./guess-number');
var Feedback = require('./feedback');
var NewGame = require('./new-game');
var GuessInput = require('./guess-input');
var Overlay = require('./overlay');

var GameContainer = React.createClass({
	startNewGame: function() {
		this.props.dispatch(actions.newGame());
	}
	render: function() {
		return (
		<div className="header">
			<Overlay show={this.props.overlay}/>
			<NewGame show={this.props.game}/>
		</div>
		<div className="game">
			<Feedback />
			<GuessInput />
			<GuessNumber />
			<PreviousGuess />
		</div>
	);
});

var mapStateToProps = function(state, props) {
	return {
		game: state.game,
		overlay: state.manageOverlay
	};
};

var Container = connect(mapStateToProps)(GameContainer);

module.exports = Container;