import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { EditorSliceReducer } from "./slices/editor.slice";
import { DraftsAPI } from "@/entities/drafts/drafts.api";

const rootReducer = combineReducers({
  EditorSliceReducer,
  [DraftsAPI.reducerPath]: DraftsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(DraftsAPI.middleware),
});

export type TypedRootState = ReturnType<typeof store.getState>;
