import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lightData: { time: [], data: [] },
  humidityData: { time: [], data: [] },
  temperatureData: { time: [], data: [] },
  gasData: { time: [], data: [] },
};

export const dataStore = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData: (state, action) => {
      const { type, data } = action.payload;
      switch (type) {
        case "light":
          state.lightData.time = [...state.lightData.time, ...data.time];
          state.lightData.data = [...state.lightData.data, ...data.data];
          break;
        case "humi":
          state.humidityData.time = [...state.humidityData.time, ...data.time];
          state.humidityData.data = [...state.humidityData.data, ...data.data];
          break;
        case "temp":
          state.temperatureData.time = [
            ...state.temperatureData.time,
            ...data.time,
          ];
          state.temperatureData.data = [
            ...state.temperatureData.data,
            ...data.data,
          ];
          break;
        case "gas":
          state.gasData.time = [...state.gasData.time, ...data.time];
          state.gasData.data = [...state.gasData.data, ...data.data];
          break;
        default:
          break;
      }
    },
  },
});

export const { updateData } = dataStore.actions;

export default dataStore.reducer;
