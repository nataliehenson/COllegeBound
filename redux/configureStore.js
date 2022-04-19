import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { favorites } from './favorites';
import { applied } from './applied';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            favorites,
            applied
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}