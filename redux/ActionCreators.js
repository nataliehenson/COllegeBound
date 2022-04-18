import * as ActionTypes from './ActionTypes';
//import { baseUrl } from '../baseUrl';

export const postFavorite = collegeId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(collegeId));
    }, 2000);
};

export const addFavorite = collegeId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: collegeId
});