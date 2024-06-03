import { __APPLICATION_CONFIG__ } from "@/app/configuration";
import { ResponseModel } from "@/app/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TagType } from "./types/tags";

export const TagsAPI = createApi({
  reducerPath: "tags/api",
  baseQuery: fetchBaseQuery({
    baseUrl: __APPLICATION_CONFIG__.api.baseUrl,
  }),
  tagTypes: ["Tag", "Tags"],
  endpoints: (build) => ({
    GetListOfTags: build.query<TagType[], void>({
      query: () => ({
        url: "/tags",
        method: "GET",
      }),
      providesTags: ["Tags"],
      transformResponse: (response: ResponseModel<TagType[]>) => response.data!,
    }),
  }),
});

export const { useGetListOfTagsQuery } = TagsAPI;
