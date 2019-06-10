import {createStore, combineReducers} from 'redux';

import { Dishes } from './dishReducer';
import { Comments } from './commentReducer';
import { Promotions } from './promotionReducer';
import { Leaders } from './leaderReducer';

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