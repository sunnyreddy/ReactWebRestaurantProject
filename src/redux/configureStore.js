import {createStore} from 'redux';
import {reducer, initialState} from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        reducer, // reducer
        initialState, // our initialState
    );

    return store;
}