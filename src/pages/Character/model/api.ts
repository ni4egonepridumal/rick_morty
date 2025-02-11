import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../shared/api/base";
// import { ICharacterResult } from "../../../shared/types";

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
  // todo tagTypes: ["AddComment"],
  endpoints: (builder) => ({
    getOneCharacter: builder.query<ICharacter, string>({
      query: (id) => `/character/${id}`,
      // todo providesTags: (result, error, id) => [{ type: "AddComment", id }],
    }),
  }),
});

export const { useLazyGetOneCharacterQuery } = getOneCharacterApi;
