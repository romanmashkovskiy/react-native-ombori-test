import * as types from '../actions/action-types';

export default function statusReducer(state = false, action) {
    switch(action.type) {
        case types.LOADING:
            return action.payload;
        default:
            return state;
    }
}