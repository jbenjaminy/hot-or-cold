var actions = require('./actions');
var store = require('./store');

console.log('Get initial state: ', store.getState());

store.dispatch(actions.newGame());
console.log('state after newGame action: ', store.getState());

store.dispatch(actions.makeGuess(14));
console.log('state after makeGuess action: ', store.getState());

store.dispatch(actions.makeGuess(50));
console.log('state after makeGuess action: ', store.getState());

store.dispatch(actions.makeGuess(store.getState().game.randomNum));
console.log('state after makeGuess action: ', store.getState());