import { __APPLICATION_CONFIG__ } from "@/app/configuration";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DraftType, DraftsSaveType } from "./types/drafts";
import { ResponseModel } from "@/app/types";

export const DraftsAPI = createApi({
  reducerPath: "drafts/api",
  baseQuery: fetchBaseQuery({
    baseUrl: __APPLICATION_CONFIG__.api.baseUrl,
  }),
  tagTypes: ["Draft", "Drafts"],
  endpoints: (build) => ({
    GetListOfDrafts: build.query<DraftType[], void>({
      query: () => ({
        url: "/drafts",
        method: "GET",
      }),
      providesTags: ["Drafts"],
      transformResponse: (response: ResponseModel<DraftType[]>) =>
        response.data!,
    }),
    GetDraftByUUID: build.query<DraftType, string | undefined>({
      query: (uuid) => ({
        url: "/drafts/" + uuid,
        method: "GET",
      }),
      providesTags: ["Draft"],
      transformResponse: (response: ResponseModel<DraftType>) => response.data!,
    }),
    SaveDraft: build.mutation<ResponseModel<DraftType>, DraftsSaveType>({
      query: (payload) => ({
        url: `/drafts/save${payload.uuid && `?uuid=${payload.uuid}`}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["Draft"],
    }),
    DeleteDraft: build.mutation<ResponseModel<unknown>, string>({
      query: (uuid) => ({
        url: "/drafts/delete/" + uuid,
        method: "DELETE",
      }),
      invalidatesTags: ["Drafts"],
    }),
  }),
});

export const {
  useSaveDraftMutation,
  useGetDraftByUUIDQuery,
  useGetListOfDraftsQuery,
  useDeleteDraftMutation,
} = DraftsAPI;
