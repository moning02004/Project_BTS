import authentication from './authentication';
import albumReducer from './albumList';
import CategoryReducer from './CategoryReducer';

import { combineReducers } from 'redux';
 
export default combineReducers({
    // authentication,
    // albumReducer
    category: CategoryReducer
});