import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';
// import taskReducer from '../features/taskSlice';

// import counterSlice from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    // task: taskReducer,
  },
});
