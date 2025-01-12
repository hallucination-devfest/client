// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import gameReducer from "./gameSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "agents",
    "remainingChats",
    "currentRound",
    "category",
    "maxZIndex",
    "agentSelectionComplete",
    "roomId",
  ],
};

const persistedReducer = persistReducer(persistConfig, gameReducer);

export const store = configureStore({
  reducer: {
    game: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
