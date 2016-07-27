var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./actions');

/**
 * @GuessInput - Component for rendering an input box and submit button.
 * Responsible for transmitting the user's guess to the reducer.
 */
var GuessInput = React.createClass({
	/**
	 * Passes the inputValue as props back to the game container.
 	*/
  onFormSubmit: function(event) {
    event.preventDefault();
    this.props.onInput();
  },
  	/**
	 * Dispatches an action to the Redux store that update the user's
	 * input value.
 	*/
  onInputChanged: function(event) {
    this.props.dispatch(actions.changeValue(event.target.value));
  },
	render: function() {
	return (
		<form onSubmit={this.onFormSubmit}>
			<input type="number" placeholder="Guess a number between 1-100" ref="guessValue" value={this.props.inputValue} onChange={this.onInputChanged}/>
			<button type="submit">Make Guess</button>
		</form>
	);
	}
});

/**
 * The connect function with an empty first parameter connects this
 * component to the store but provides no state.
 */
var Container = connect()(GuessInput);

exports.GuessInput = GuessInput;
exports.Container = Container;