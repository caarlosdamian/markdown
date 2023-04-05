import { createSlice } from '@reduxjs/toolkit';

export interface ScreenState {
  hide: boolean;
}

const initialState: ScreenState = {
  hide: true,
};

export const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    toggleScreen: (state) => {
      state.hide = !state.hide;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleScreen } = screenSlice.actions;

export default screenSlice.reducer;
