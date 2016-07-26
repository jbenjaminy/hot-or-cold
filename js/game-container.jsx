var React = require('react');
var connect = require('react-redux').connect;

var actions = require('./actions');
var PreviousGuess = require('./previous-guess');
var GuessNumber = require('./guess-number');
var Feedback = require('./feedback');
var NewGame = require('./new-game');
var GuessInput = require('./guess-input');
var Overlay = require('./overlay');

var GameContainer = React.createClass({
	startNewGame: function() {
		this.props.dispatch(actions.newGame());
	},
	toggleOverlay: function() {
		this.props.dispatch(actions.manageOverlay());
	},
	onSubmitGuess: function(userInput) {
		this.props.dispatch(actions.makeGuess(userInput));
	},
	render: function() {
		return (
			<div className="game-container">
				<div className="header">
					<Overlay isVisible={this.props.overlay} onButtonClick={this.toggleOverlay}/>
					<NewGame restart={this.startNewGame}/>
				</div>
				<div className="game">
					<Feedback text={this.props.game.feedback}/>
					<GuessInput onInput={this.onSubmitGuess}/>
					<GuessNumber text={this.props.game.previousGuesses.length}/>
					<PreviousGuess array={this.props.game.previousGuesses}/>
				</div>
			</div>
		);
}
});

var mapStateToProps = function(state, props) {
	return {
		game: state.game,
		overlay: state.manageOverlay
	};
};

var Container = connect(mapStateToProps)(GameContainer);

module.exports = Container;