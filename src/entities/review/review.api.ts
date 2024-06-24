import { __APPLICATION_CONFIG__ } from "@/app/configuration";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ReviewPayload, ReviewType } from "./types/review";
import { ResponseModel } from "@/app/types";

export const ReviewAPI = createApi({
  reducerPath: "review/api",
  baseQuery: fetchBaseQuery({
    baseUrl: __APPLICATION_CONFIG__.api.baseUrl,
    prepareHeaders: (headers) => {
      const token: string | null = localStorage.getItem("access");
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
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
    GetReviewRequestByUUID: build.query<ReviewType, string>({
      query: (payload) => ({
        url: "/review/" + payload,
        method: "GET",
      }),
      providesTags: ["Review"],
      transformResponse: (response: ResponseModel<ReviewType>) =>
        response.data!,
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
        url: "/announcements/toPublic",
        method: "POST",
        body: {
          uuid: payload,
        },
      }),
      invalidatesTags: ["Review", "Reviews"],
    }),
    RejectReview: build.mutation<
      void,
      {
        uuid: string;
        reason?: string;
      }
    >({
      query: (payload) => ({
        url: "/review/reject/" + payload.uuid,
        method: "POST",
        body: payload.reason,
      }),
      invalidatesTags: ["Review", "Reviews"],
    }),
    GetListOfSendedOnReview: build.query<ReviewType[], void>({
      query: () => ({
        url: "/review/author/all",
        method: "GET",
      }),
      transformResponse: (response: ResponseModel<ReviewType[]>) =>
        response.data!,
      providesTags: ["Reviews"],
    }),
    GetCountOfSendedReviews: build.query<string, void>({
      query: () => ({
        url: "/review/author/count",
        method: "GET",
      }),
      transformResponse: (response: ResponseModel<string>) => response.data!,
      providesTags: ["Reviews"],
    }),
  }),
});

export const {
  usePostSendToReviewMutation,
  useGetListOfReviewRequestsQuery,
  useGetListOfSendedOnReviewQuery,
  useGetCountOfSendedReviewsQuery,
  useGetReviewRequestByUUIDQuery,
  useApproveReviewMutation,
  useRejectReviewMutation,
} = ReviewAPI;
