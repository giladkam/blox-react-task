import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authenticationReducer from './reducers/authenticationReducer';
import cryptoWatchlist from './reducers/cryptoWatchlistReducer';

const rootReducer = combineReducers({
    authenticationReducer:authenticationReducer,
    cryptoWatchlist: cryptoWatchlist
})

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;
 