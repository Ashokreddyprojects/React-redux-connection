import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/reducer';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';
export default function configureStore() {
    return createStore(
        reducer, 
        applyMiddleware(thunk)
        //,applyMiddleware(logger)
    );
}