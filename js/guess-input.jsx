var React = require('react');

var GuessInput = React.createClass({
	render: function() {
		console.log(this.props, 'input props');
	return (
		<form onSubmit={this.props.onInput.bind(null, this.refs.guessValue)}>
			<input type="text" placeholder="Guess a number between 1-100" ref="guessValue"/>
			<button type="submit">Make Guess</button>
		</form>
	);
	}
});

module.exports = GuessInput;