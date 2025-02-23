import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import emptyApi from "./api";
import errorHandler from "./errorHandler";
import authReducer from "./slice/authSlice";
import themeSettingReducer from "./slice/themeSettingSlice";
import sidebarReducer from "./slice/sidebarSlice";

const persistConfig = {
  key: "exhibition-admin-panel:auth",
  version: 1,
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  themeSetting: themeSettingReducer,
  sidebarSlice: sidebarReducer,
  [emptyApi.reducerPath]: emptyApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.MODE === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Redux Persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(errorHandler)
      .concat(emptyApi.middleware),
});

export const persistor = persistStore(store);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
