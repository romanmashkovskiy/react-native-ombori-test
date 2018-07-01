import * as types from './action-types';

export function loadData(page) {
    return function(dispatch) {
        dispatch(setState(true));
        return fetch(`https://reqres.in/api/users?page=${page}`)
            .then(response => {
                return response.json();
            })
            .then(response => {

                dispatch(loadDataSuccess(response));
                dispatch(setState(false));
            }).catch(error => {
                dispatch(setState(false));
                throw(error);
            });
    };
}

export function loadDataSuccess(response) {
    return {type: types.LOAD_DATA_SUCCESS, payload: response};
}

export function setState(state) {
    return {type: types.LOADING, payload: state};
}

export function setCurrentPage(page) {
    return {type: types.SET_PAGE_NUMBER, payload: page}
}