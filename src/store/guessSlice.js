import { createSlice } from "@reduxjs/toolkit";

const guessSlice = createSlice({
  name: "guess", // Change 'name' to something meaningful for your slice
  initialState: { guess: "" },
  reducers: {
    setGuess: (state, action) => {
      state.guess = action.payload;
    },
  },
});

export const { setGuess } = guessSlice.actions;

export default guessSlice.reducer;
