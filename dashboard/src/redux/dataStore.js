import { createSlice } from "@reduxjs/toolkit";

import {
  temperatureData,
  humidityData,
  lightData,
  controlData,
} from "../assets";

const initialState = {
  lightData: lightData,
  humidityData: humidityData,
  temperatureData: temperatureData,
  controlData: controlData,
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
            value: randomValue + " lux",
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
            value: randomValue + "%",
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
            value: randomValue + "°C",
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
    updateDataControl: (state, action) => {
      state.controlData.categories = [
        ...state.controlData.categories,
        action.payload.vietNamTime,
      ];
      state.controlData.lightOne = [
        ...state.controlData.lightOne,
        action.payload.lightOne,
      ];
      state.controlData.lightTwo = [
        ...state.controlData.lightTwo,
        action.payload.lightTwo,
      ];
    },
    clearData: (state) => {
      state.lightData = {
        ...state.lightData,
        value: "0 lux",
        series: [
          {
            ...state.lightData.series[0],
            data: [],
            categories: [],
          },
        ],
      };
      state.humidityData = {
        ...state.humidityData,
        value: "0%",
        series: [
          {
            ...state.humidityData.series[0],
            data: [],
            categories: [],
          },
        ],
      };
      state.temperatureData = {
        ...state.temperatureData,
        value: "0°C",
        series: [
          {
            ...state.temperatureData.series[0],
            data: [],
            categories: [],
          },
        ],
      };
      state.controlData = {
        categories: [],
        lightOne: [],
        lightTwo: [],
      };
    },
  },
});

export const { updateData, updateDataControl, clearData } = dataStore.actions;

export default dataStore.reducer;
