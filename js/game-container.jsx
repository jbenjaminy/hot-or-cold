/* ----------- Dependencies ---------------- */
var React = require('react');
var connect = require('react-redux').connect;

var actions = require('./actions');
var PreviousGuess = require('./previous-guess');
var GuessNumber = require('./guess-number');
var Feedback = require('./feedback');
var NewGame = require('./new-game');
var GuessInput = require('./guess-input').Container;
var Overlay = require('./overlay');
var Thermometer = require('./thermometer');

var GameContainer = React.createClass({
	/**
	 * Dispatches an action to the Redux store that will reset
	 * the state to its initial values.
 	*/
	startNewGame: function() {
		this.props.dispatch(actions.newGame());
	},
	/**
	 * Dispatches an action to the Redux store that will toggle to overlay
	 */
	toggleOverlay: function() {
		this.props.dispatch(actions.manageOverlay());
	},
	/**
	 * Dispatches an action to the Redux store that will generate feedback 
	 * for a user's guess
	 */
	onSubmitGuess: function() {
		this.props.dispatch(actions.makeGuess());
	},
	/**
	 * Renders the container to the DOM
	 */
	render: function() {
		return (
			<div className="game-container">
				<div className="header">
					<div className="header-column">
						<Overlay isVisible={this.props.overlay} onButtonClick={this.toggleOverlay}/>
						<NewGame restart={this.startNewGame}/>
					</div>
				</div>
				<div className="main">
					<div className="game-column">
						<div className="game">
							<h1 className="game-title">Hot | Cold</h1>
							<Feedback text={this.props.game.feedback}/>
							<GuessInput onInput={this.onSubmitGuess} inputValue={this.props.game.inputValue}/>
							<GuessNumber text={this.props.game.previousGuesses.length}/>
							<PreviousGuess array={this.props.game.previousGuesses}/>
						</div>
					</div>
					<div className="therm-column">
						<Thermometer thermAmount={this.props.game.thermAmount}/>
					</div>
				</div>
			</div>
		);
	}
});

/**
 * Maps the Redux state to the GameContainer's props object
 * @param  {Object} state
 * @param  {Object} props
 * @return {Object}
 */
var mapStateToProps = function(state, props) {
	return {
		game: state.game,
		overlay: state.manageOverlay
	};
};

var Container = connect(mapStateToProps)(GameContainer);

module.exports = Container;