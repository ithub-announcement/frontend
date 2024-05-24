import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { EditorSliceReducer } from "./slices/editor.slice";
import { DraftsAPI } from "@/entities/drafts/drafts.api";
import { ReviewAPI } from "@/entities/review/review.api";
import { AuthorizationAPI } from "@/entities/login/login.api";

const rootReducer = combineReducers({
  EditorSliceReducer,
  [AuthorizationAPI.reducerPath]: AuthorizationAPI.reducer,
  [DraftsAPI.reducerPath]: DraftsAPI.reducer,
  [ReviewAPI.reducerPath]: ReviewAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      DraftsAPI.middleware,
      AuthorizationAPI.middleware
    ),
});

export type TypedRootState = ReturnType<typeof store.getState>;
