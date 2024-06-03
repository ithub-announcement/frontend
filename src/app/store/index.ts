import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { EditorSliceReducer } from "./slices/editor.slice";
import { DraftsAPI } from "@/entities/drafts/drafts.api";
import { ReviewAPI } from "@/entities/review/review.api";
import { AuthorizationAPI } from "@/entities/login/login.api";
import { TagsAPI } from "@/entities/tags/tags.api";
import { GlobalSliceReducer } from "./slices/global.slice";

const rootReducer = combineReducers({
  EditorSliceReducer,
  GlobalSliceReducer,
  [AuthorizationAPI.reducerPath]: AuthorizationAPI.reducer,
  [DraftsAPI.reducerPath]: DraftsAPI.reducer,
  [ReviewAPI.reducerPath]: ReviewAPI.reducer,
  [TagsAPI.reducerPath]: TagsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      DraftsAPI.middleware,
      TagsAPI.middleware,
      ReviewAPI.middleware,
      AuthorizationAPI.middleware
    ),
});

export type TypedRootState = ReturnType<typeof store.getState>;
