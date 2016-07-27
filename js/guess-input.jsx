var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./actions');

var GuessInput = React.createClass({
  onFormSubmit: function(event) {
    event.preventDefault();
    this.props.onInput();
  },
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

// Gives access to dispatch with no state.
var Container = connect()(GuessInput);

exports.GuessInput = GuessInput;
exports.Container = Container;