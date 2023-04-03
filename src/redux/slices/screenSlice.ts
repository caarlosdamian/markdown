import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Files } from '../../common/data';
import { File } from '../../common/types';

export interface ScreenState {
  hide: boolean;
}

const initialState: ScreenState = {
  hide: false,
};

export const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = screenSlice.actions;

export default screenSlice.reducer;
