import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: rootReducer
});
 