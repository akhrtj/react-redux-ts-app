import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//////////////////////////////

export interface IAppState {
  foo?: string;
}

export const initialState: IAppState = {};

//////////////////////////////

export const slice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    updateFoo: (state, action: PayloadAction<string>): IAppState => ({
      ...state,
      foo: action.payload,
    }),
  },
});

//////////////////////////////

export const { updateFoo } = slice.actions;

//////////////////////////////

export const reducer = slice.reducer;
