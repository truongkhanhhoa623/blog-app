import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
import articleReducer from '../slice/articleSlice';


const rootReducer = combineReducers({
    user: userReducer,
    article: articleReducer,
})
export default rootReducer