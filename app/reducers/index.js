import {combineReducers} from 'redux';
import userList from './list-reducer';



const rootReducer = combineReducers({
    userList: userList
});

export default rootReducer;