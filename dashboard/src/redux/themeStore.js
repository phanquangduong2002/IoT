import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

export const themeStore = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { changeDarkMode } = themeStore.actions;

export default themeStore.reducer;
