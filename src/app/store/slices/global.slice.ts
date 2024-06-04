import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  global: {
    isLoading: false,
  },
};

export const GlobalSlice = createSlice({
  name: "GlobalSlice",
  initialState,
  reducers: {
    setGlobalLoading: (state, action) => {
      state.global.isLoading = action.payload;
    },
  },
});

export const GlobalSliceReducer = GlobalSlice.reducer;
export const GlobalSliceActions = GlobalSlice.actions;
