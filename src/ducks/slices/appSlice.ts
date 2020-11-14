import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAppState {
  foo?: string;
}

const initialState: IAppState = {};

export const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    updateFoo: (state, action: PayloadAction<string>): IAppState => ({
      ...state,
      foo: action.payload,
    }),
  },
});

export const { updateFoo } = appSlice.actions;
