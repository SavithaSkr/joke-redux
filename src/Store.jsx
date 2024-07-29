import { configureStore } from "@reduxjs/toolkit";
import jokeSlice from "./jokeSlice";

const Store = configureStore({
  reducer: {
    joke: jokeSlice.reducer,
  },
});
export default Store;
