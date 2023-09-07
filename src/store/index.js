import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./nameSlice";
import guessSlice from "./guessSlice";
import { loadState, saveState } from "./storage";
import levelSlice from "./levelSlice";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    username: nameSlice,
    guess: guessSlice,
    level: levelSlice,
  },
  preloadedState: persistedState, // Load initial state from localStorage
});

store.subscribe(() => {
  saveState(store.getState()); // Save state to localStorage after each update
});

export default store;
