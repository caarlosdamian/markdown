import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
};
export const SidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.show = !state.show;
    },
  },
});

export const { toggleSidebar } = SidebarSlice.actions;

export default SidebarSlice.reducer;
