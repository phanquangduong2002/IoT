import { createSlice } from "@reduxjs/toolkit";

import { temperatureData, humidityData, lightData } from "../assets";

const initialState = {
  lightData: lightData,
  humidityData: humidityData,
  temperatureData: temperatureData,
};

export const dataStore = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData: (state, action) => {
      const { type, randomValue, vietnamTime } = action.payload;
      switch (type) {
        case "light":
          state.lightData = {
            ...state.lightData,
            value:
              type === "temperature" ? randomValue + "°C" : randomValue + "%",
            series: [
              {
                ...state.lightData.series[0],
                data: [...state.lightData.series[0].data, randomValue],
                categories: [
                  ...state.lightData.series[0].categories,
                  vietnamTime,
                ],
              },
            ],
          };
          break;
        case "humidity":
          state.humidityData = {
            ...state.humidityData,
            value:
              type === "temperature" ? randomValue + "°C" : randomValue + "%",
            series: [
              {
                ...state.humidityData.series[0],
                data: [...state.humidityData.series[0].data, randomValue],
                categories: [
                  ...state.humidityData.series[0].categories,
                  vietnamTime,
                ],
              },
            ],
          };
          break;
        case "temperature":
          state.temperatureData = {
            ...state.temperatureData,
            value:
              type === "temperature" ? randomValue + "°C" : randomValue + "%",
            series: [
              {
                ...state.temperatureData.series[0],
                data: [...state.temperatureData.series[0].data, randomValue],
                categories: [
                  ...state.temperatureData.series[0].categories,
                  vietnamTime,
                ],
              },
            ],
          };
          break;
        default:
          break;
      }
    },
  },
});

export const { updateData } = dataStore.actions;

export default dataStore.reducer;
