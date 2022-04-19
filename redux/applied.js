import * as ActionTypes from './ActionTypes';

export const applied = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_APPLIED:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);
        case ActionTypes.DELETE_APPLIED:
            return state.filter(favorite => favorite !== action.payload);
        default:
            return state;
    }
};