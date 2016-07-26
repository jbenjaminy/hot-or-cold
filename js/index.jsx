var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var actions = require('./actions');
var store = require('./store');
var GameContainer = require('./game-container')

console.log('Get initial state: ', store.getState());

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Provider store={store}>
      <GameContainer />
    </Provider>, document.getElementById('app'));
});