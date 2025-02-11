import { configureStore } from "@reduxjs/toolkit";
import { getCharactersApi } from "../../pages/Home/model/api";
import { getOneCharacterApi } from "../../pages/Character/model/api";

export const store = configureStore({
  reducer: {
    [getCharactersApi.reducerPath]: getCharactersApi.reducer,
    [getOneCharacterApi.reducerPath]: getOneCharacterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(getCharactersApi.middleware)
      .concat(getOneCharacterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
