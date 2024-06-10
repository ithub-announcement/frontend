import { __APPLICATION_CONFIG__ } from "@/app/configuration";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ReviewPayload, ReviewType } from "./types/review";
import { ResponseModel } from "@/app/types";

export const ReviewAPI = createApi({
  reducerPath: "review/api",
  baseQuery: fetchBaseQuery({
    baseUrl: __APPLICATION_CONFIG__.api.baseUrl,
  }),
  tagTypes: ["Review", "Reviews"],
  endpoints: (build) => ({
    GetListOfReviewRequests: build.query<ReviewType[], void>({
      query: () => ({
        url: "/review",
        method: "GET",
      }),
      providesTags: ["Reviews"],
      transformResponse: (response: ResponseModel<ReviewType[]>) =>
        response.data!,
    }),
    GetReviewRequestByUUID: build.query<void, string>({
      query: (payload) => ({
        url: "/review/" + payload,
        method: "GET",
      }),
      providesTags: ["Review"],
    }),
    PostSendToReview: build.mutation<void, ReviewPayload>({
      query: (payload) => ({
        url: "/review/send-to-review",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Review"],
    }),
    ApproveReview: build.mutation<void, string>({
      query: (payload) => ({
        url: "/review/approve/" + payload,
        method: "POST",
      }),
      invalidatesTags: ["Review"],
    }),
    RejectReview: build.mutation<void, string>({
      query: (payload) => ({
        url: "/review/reject/" + payload,
        method: "POST",
      }),
      invalidatesTags: ["Review"],
    }),
  }),
});

export const { usePostSendToReviewMutation, useGetListOfReviewRequestsQuery } =
  ReviewAPI;
