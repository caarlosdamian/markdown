import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Files } from '../../common/data';
import { File } from '../../common/types';

export interface Filesstate {
  selectedFile: File;
  files: File[];
}

const initialState: Filesstate = {
  selectedFile: Files[0],
  files: Files,
};

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    changeSelectedFile: (state, { payload }) => {
      state.selectedFile = payload;
    },
    changeContent: (state, { payload }) => {
      state.selectedFile.content = payload;
    },
    addFile: (state, { payload }) => {
      state.files.push(payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSelectedFile, changeContent, addFile } =
  filesSlice.actions;

export default filesSlice.reducer;
