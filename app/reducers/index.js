import {combineReducers} from 'redux';
import listReducer from './list-reducer';
import pageReducer from './current-page-reducer';
import statusReducer from './status-loading-reducer';
import animationReducer from './animation-reducer';



const rootReducer = combineReducers({
    userList: listReducer,
    currentPage: pageReducer,
    loading: statusReducer,
    animationLoading: animationReducer
});

export default rootReducer;