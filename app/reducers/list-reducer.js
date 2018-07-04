import * as types from '../actions/action-types';

export default function listReducer(state = [], action) {
    switch(action.type) {
        case types.LOAD_DATA_SUCCESS:
            console.log(action.payload);
            console.log(state);
                return [...state,...action.payload.data];
        default:
            return state;
    }
}