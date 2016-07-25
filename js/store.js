var redux = require('redux');
var reducers = require('./reducers');

var createStore = redux.createStore;
var store = createStore(reducers.reducer);

module.exports  = store;