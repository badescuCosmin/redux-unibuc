import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./counter.slice";
import { postsSlice } from "./posts.service";

export const store = configureStore({
  reducer: { counterReducer, [postsSlice.reducerPath]: postsSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
