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

export const postApplied = collegeId => dispatch => {
    setTimeout(() => {
        dispatch(addApplied(collegeId));
    }, 200);
};

export const addApplied = collegeId => ({
    type: ActionTypes.ADD_APPLIED,
    payload: collegeId
});

export const deleteApplied = collegeId => ({
    type: ActionTypes.DELETE_APPLIED,
    payload: collegeId
}); 