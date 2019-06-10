import { COMMENTS } from '../../shared/comments';
import * as ActionTypes from '../actions/ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("new comment", comment);
            return state.concat(comment);

        default:
          return state;
    }
};