import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  global: {
    isLoading: false,
  },
  publications: {
    searchParams: [],
  },
};

export const GlobalSlice = createSlice({
  name: "GlobalSlice",
  initialState,
  reducers: {
    setGlobalLoading: (state, action) => {
      state.global.isLoading = action.payload;
    },
    setPublicationsSearchParams: (state, action) => {
      state.publications.searchParams = action.payload;
    },
  },
});

export const GlobalSliceReducer = GlobalSlice.reducer;
export const GlobalSliceActions = GlobalSlice.actions;
