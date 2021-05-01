import {
  configureStore,
  createSlice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface IAppState {
  text: 'foo' | 'baz';
}

const initialState: IAppState = {
  text: 'foo',
};

const reducers: SliceCaseReducers<IAppState> = {
  updateText: (state, action: { payload: 'foo' | 'baz' }) => ({
    ...state,
    text: action.payload,
  }),
};

const slice = createSlice({
  name: 'appState',
  initialState,
  reducers,
});

export const useAppState = (): IAppState =>
  useSelector<IAppState, IAppState>((state) => state);

export const { updateText } = slice.actions;

export const store = configureStore({
  reducer: slice.reducer,
});
