import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  dark: boolean;
}

const initialState: ThemeState = {
  dark: window.matchMedia('(prefers-color-scheme: dark)').matches,
};

export const themeSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
    },
    toggleThemeManual: (state, { payload }) => {
      state.dark = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, toggleThemeManual } = themeSlice.actions;

export default themeSlice.reducer;
