import { __APPLICATION_CONFIG__ } from "@/app/configuration";
import { ResponseModel } from "@/app/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TagPayloadType, TagType } from "./types/tags";

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
    CreateNewTag: build.mutation<TagType, TagPayloadType>({
      query: (payload) => ({
        url: "/tags/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Tag", "Tags"],
      transformResponse: (response: ResponseModel<TagType>) => response.data!,
    }),
    DeleteTag: build.mutation<void, string>({
      query: (payload) => ({
        url: "tags/delete/" + payload,
        method: "DELETE",
      }),
      invalidatesTags: ["Tag", "Tags"],
    }),
  }),
});

export const {
  useGetListOfTagsQuery,
  useCreateNewTagMutation,
  useDeleteTagMutation,
} = TagsAPI;
