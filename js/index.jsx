var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var actions = require('./actions');
var store = require('./store');
var GameContainer = require('./game-container');

/*  
 * When pages loads, create a game and render the root (i.e. GameContainer) component
*/
document.addEventListener('DOMContentLoaded', function () {
	store.dispatch(actions.newGame());

  	ReactDOM.render(
    	<Provider store={store}>
      		<GameContainer />
    	</Provider>, document.getElementById('app'));
});