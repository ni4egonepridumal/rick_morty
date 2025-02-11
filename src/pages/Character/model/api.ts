import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../shared/api/base";

interface IOrigin {
  name: string;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
}

interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export const getOneCharacterApi = createApi({
  reducerPath: "getOneCharacterApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getOneCharacter: builder.query<ICharacter, string>({
      query: (id) => `/character/${id}`,
    }),
  }),
});

export const { useLazyGetOneCharacterQuery } = getOneCharacterApi;
