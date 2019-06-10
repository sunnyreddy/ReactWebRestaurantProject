import * as ActionTypes from './ActionTypes';

export const add_comment = (dishId,author,rating,comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});