import {combineReducers} from 'redux';
import listReducer from './list-reducer';
import pageReducer from './current-page-reducer';
import statusReducer from './status-loading-reducer';



const rootReducer = combineReducers({
    userList: listReducer,
    currentPage: pageReducer,
    loading: statusReducer
});

export default rootReducer;