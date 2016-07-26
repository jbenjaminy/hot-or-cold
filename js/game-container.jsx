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
	onInput: function(userInput) {
		this.props.dispatch(actions.makeGuess(userInput));
	},
	render: function() {
		return (
			<div>
				<div className="header">
					<Overlay isVisible={this.props.overlay} onButtonClick={this.toggleOverlay}/>

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