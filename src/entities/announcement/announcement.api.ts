import { __APPLICATION_CONFIG__ } from "@/app/configuration";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AnnouncementType } from "./types/announcement";
import { ResponseModel } from "@/app/types";

export const AnnouncementAPI = createApi({
  reducerPath: "announcement/api",
  baseQuery: fetchBaseQuery({
    baseUrl: __APPLICATION_CONFIG__.api.baseUrl,
  }),
  tagTypes: ["Announcement", "Announcements"],
  endpoints: (build) => ({
    GetListOfAnnouncements: build.query<AnnouncementType[], void>({
      query: () => ({
        url: "/announcements",
        method: "GET",
      }),
      providesTags: ["Announcements"],
      transformResponse: (response: ResponseModel<AnnouncementType[]>) =>
        response.data!,
    }),
    GetAnnouncementByUUID: build.query<AnnouncementType, string>({
      query: (payload) => ({
        url: "/announcements/" + payload,
        method: "GET",
      }),
      providesTags: ["Announcement"],
      transformResponse: (response: ResponseModel<AnnouncementType>) =>
        response.data!,
    }),
  }),
});

export const { useGetAnnouncementByUUIDQuery, useGetListOfAnnouncementsQuery } =
  AnnouncementAPI;
