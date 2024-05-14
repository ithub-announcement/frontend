import { __APPLICATION_CONFIG__ } from "@/app/configuration";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ReviewAPI = createApi({
  reducerPath: "review/api",
  baseQuery: fetchBaseQuery({
    baseUrl: __APPLICATION_CONFIG__.api.baseUrl,
  }),
  tagTypes: ["Draft", "Drafts"],
  endpoints: (build) => ({
    // todo...
  }),
});

export const {} = ReviewAPI;
