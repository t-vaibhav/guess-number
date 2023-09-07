import { createSlice } from "@reduxjs/toolkit";

const levelSlice = createSlice({
  name: "level", // Change 'name' to something meaningful for your slice
  initialState: { level: null },
  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload;
    },
  },
});

export const { setLevel } = levelSlice.actions;

export default levelSlice.reducer;
