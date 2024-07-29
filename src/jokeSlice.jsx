import React from "react";
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* const fetchJoke = (category) => {
  axios
    .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((result) => {
      console.log(result.data.value);
      // state.joke = result.data.value;
      setJoke(result.data.value);
    });
};
 */

const fetchJoke = createAsyncThunk("jokes/jokecategory", async (category) => {
  return axios
    .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((result) => {
      console.log(result.data.value);
      // state.joke = result.data.value;
      return result.data.value;
    });
});
const initialState = {
  joke: "No Joke",
};

const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchJoke.pending, () => {
        console.log("Loading....");
      })
      .addCase(fetchJoke.fulfilled, (state, actions) => {
        state.joke = actions.payload;
      });
  },
});
export default jokeSlice;
export const { setJoke } = jokeSlice.actions;
export { fetchJoke };
