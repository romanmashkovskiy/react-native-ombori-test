import * as types from '../actions/action-types';

export default function animationReducer(state = true, action) {
    switch(action.type) {
        case types.STOP_ANIMATION:
            return false;
        default:
            return state;
    }
}