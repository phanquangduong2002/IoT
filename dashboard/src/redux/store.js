import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeStore from "./themeStore";
import dataStore from "./dataStore";

const rootReducer = combineReducers({ theme: themeStore, data: dataStore });

export const store = configureStore({
  reducer: rootReducer,
});
