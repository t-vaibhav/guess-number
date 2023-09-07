import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "username", // Change 'name' to something meaningful for your slice
  initialState: { name: "" },
  reducers: {
    setName: (state, action) => {
      console.log("Setting name to:", action.payload);
      state.name = action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;
