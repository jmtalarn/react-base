/* global process */
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createCLILogger from 'redux-cli-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import itemReducer from './reducers/item-reducer';
import messageReducer from './reducers/message-reducer';

// redux-cli-logger enables logging in CLI, so in tests with test environment variable defined will print out things on the screen
const loggerMiddleware = process.env.NODE_ENV === 'test' ? createCLILogger({}) : createLogger();

const rootReducer = combineReducers({
    item: itemReducer,
    message: messageReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware, // neat middleware that logs actions
    ),
);

export default store;
