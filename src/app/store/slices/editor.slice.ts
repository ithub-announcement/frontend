import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wrapper: {
    title: "",
    content: "",
  },
  origin: {
    uuid: "",
    title: "",
    content: "",
    dateTime: "",
  },
  editor: {
    disable_editor: false,
    error: "",
  },
};

export const EditorSlice = createSlice({
  name: "EditorSlice",
  initialState,
  reducers: {
    setEditorTitle: (state, action) => {
      state.wrapper.title = action.payload;
    },
    setEditorValue: (state, action) => {
      state.wrapper.content = action.payload;
    },

    setEditorError: (state, action) => {
      state.editor.error = action.payload;
    },

    setOriginAndWrapper: (state, action) => {
      state.origin = { ...action.payload };
      state.wrapper = { ...action.payload };
    },

    setEditorOrigin: (state, action) => {
      state.origin = { ...action.payload };
    },

    setLockEditor: (state, action) => {
      state.editor.disable_editor = action.payload;
    },

    resetEditor: (state) => {
      state.wrapper = initialState.wrapper;
      state.origin = initialState.origin;
    },
  },
});

export const EditorSliceReducer = EditorSlice.reducer;
export const EditorSliceActions = EditorSlice.actions;
