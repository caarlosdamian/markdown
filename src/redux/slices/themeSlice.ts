import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  dark: boolean;
}

const initialState: ThemeState = {
  dark: false,
};

export const themeSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
