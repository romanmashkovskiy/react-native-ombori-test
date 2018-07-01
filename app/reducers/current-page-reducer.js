import * as types from '../actions/action-types';

export default function pageReducer(state = 1, action) {
    switch(action.type) {
        case types.SET_PAGE_NUMBER:
            return action.payload;
        default:
            return state;
    }
}