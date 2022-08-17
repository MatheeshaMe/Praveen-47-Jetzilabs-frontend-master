import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice';
import taskReducer from '../features/taskSlice';
import walletReducer from '../features/walletSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: taskReducer,
    wallet: walletReducer,
  },
});