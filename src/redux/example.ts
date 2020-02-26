import { createSlice } from "@reduxjs/toolkit";



const exampleSlice = createSlice({
  name: "example",
  initialState: {
    example: "example"
  },
  reducers: {
    exampleAction(state, action) {},
  }
});

// Extract the action creators object and the reducer
const { actions, reducer } = exampleSlice;

// Extract and export each action creator by name
export const { exampleAction } = actions;
// Export the reducer, either as a default or named export
export const example = reducer;
