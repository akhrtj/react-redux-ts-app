import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appSlice } from './slices/appSlice';

export type TRootState = ReturnType<typeof reducer>;
export type TDispatch = typeof store.dispatch;

const reducer = combineReducers({
  app: appSlice.reducer,
});

export const store = configureStore({
  reducer: reducer,
});
