var redux = require('redux');
var reducer = require('./reducers').reducer;

var createStore = redux.createStore;
var store = createStore(reducer);

module.exports  = store;