import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../shared/api/base";
import { ICharacterResult } from "../../../shared/types";

interface ICharacter {
  info: {
    count: number;
    next: null;
    pages: number;
    prev: null;
  };
  results: ICharacterResult[];
}

export const getCharactersApi = createApi({
  reducerPath: "getCharacters",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  // todo tagTypes: ["AddComment"],
  endpoints: (builder) => ({
    getCharacters: builder.query<ICharacter, string>({
      query: (value) => `/character/?name=${value}`,
      // todo providesTags: (result, error, id) => [{ type: "AddComment", id }],
    }),
  }),
});

export const { useLazyGetCharactersQuery } = getCharactersApi;
