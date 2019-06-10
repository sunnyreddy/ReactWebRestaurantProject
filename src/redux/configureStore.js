import {createStore, combineReducers} from 'redux';

import { Dishes } from './reducers/dishReducer';
import { Comments } from './reducers/commentReducer';
import { Promotions } from './reducers/promotionReducer';
import { Leaders } from './reducers/leaderReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
        }) // reducer
    );

    return store;
}