var React = require('react');

var GuessInput = React.createClass({
  onFormSubmit: function(event) {
    event.preventDefault();
    var number = parseInt(this.refs.guessValue.value, 10);
    this.props.onInput(number);
  },
	render: function() {
	return (
		<form onSubmit={this.onFormSubmit}>
			<input type="number" placeholder="Guess a number between 1-100" ref="guessValue"/>
			<button type="submit">Make Guess</button>
		</form>
	);
	}
});

module.exports = GuessInput;