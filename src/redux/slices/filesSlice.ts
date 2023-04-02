import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Files } from '../../common/data';
import { File } from '../../common/types';

export interface Filesstate {
  selectedFile: File | {};
  files: File[];
}

const initialState: Filesstate = {
  selectedFile: {},
  files: Files,
};

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = filesSlice.actions;

export default filesSlice.reducer;
