import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { IAppState, reducer } from './slice';

export type TDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer,
});

export const useAppState = (): IAppState =>
  useSelector((state: IAppState) => state);
