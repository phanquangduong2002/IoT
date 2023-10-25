import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isB1On: false,
  isB2On: false,
};

export const controlStore = createSlice({
  name: "control",
  initialState,
  reducers: {
    updateDataControl: (state, action) => {
      const { type, data } = action.payload;
      switch (type) {
        case "1":
          return {
            ...state,
            isB1On: data,
          };
        case "2":
          return {
            ...state,
            isB2On: data,
          };
      }
    },
  },
});

export const { updateDataControl } = controlStore.actions;

export default controlStore.reducer;
