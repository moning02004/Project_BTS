import authentication from './authentication';
import CategoryReducer from './CategoryReducer';

import { combineReducers } from 'redux';
 
export default combineReducers({
    auth: authentication,
    category: CategoryReducer
});