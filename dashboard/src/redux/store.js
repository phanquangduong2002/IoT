import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeStore from "./themeStore";
import dataStore from "./dataStore";
import controlStore from "./controlStore";

const rootReducer = combineReducers({
  theme: themeStore,
  data: dataStore,
  control: controlStore,
});

export const store = configureStore({
  reducer: rootReducer,
});
