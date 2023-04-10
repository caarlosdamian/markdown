import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Files } from '../../common/data';
import { File } from '../../common/types';
import moment from 'moment';

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
      state.selectedFile[payload.name]= payload.value;
    },
    addFile: (state) => {
      state.files.push({
        id: Math.floor(Math.random() * Date.now()),
        name: `New Doc ${state.files.length + 1}`,
        content: `New Doc ${state.files.length + 1}`,
        createdAt: moment().format('DD MMMM YYYY'),
      });
    },
    saveFile: (state) => {
      state.files = state.files.map((item) => {
        if (item.id === state.selectedFile.id) {
          return state.selectedFile;
        }
        return item;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSelectedFile, changeContent, addFile, saveFile } =
  filesSlice.actions;

export default filesSlice.reducer;
