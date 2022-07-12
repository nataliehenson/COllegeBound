import * as ActionTypes from './ActionTypes';
//import { baseUrl } from '../baseUrl';

export const postFavorite = collegeId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(collegeId));
    }, 200);
};

export const addFavorite = collegeId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: collegeId
});

export const deleteFavorite = collegeId => ({
    type: ActionTypes.DELETE_FAVORITE,
    payload: collegeId
}); 

//new action creators for TODO

