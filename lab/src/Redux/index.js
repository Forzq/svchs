import { configureStore } from '@reduxjs/toolkit';
import cactusReducer from '../Redux/taskslice';
import userReducer from './userslice';

const store = configureStore({
  reducer: {
    cactus: cactusReducer,
    user: userReducer,
  },
});

export default store;