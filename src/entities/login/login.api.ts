import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthorizationPayload } from "./types/login";
import { __APPLICATION_CONFIG__ } from "@/app/configuration";
import { ResponseModel } from "@/app/types";
import { AuthorizationType } from "@/app/core/types";

export const AuthorizationAPI = createApi({
  reducerPath: "authorization/api",
  baseQuery: fetchBaseQuery({
    baseUrl: __APPLICATION_CONFIG__.api.baseUrl_validate_auth_token,
  }),
  tagTypes: ["Authorization"],
  endpoints: (build) => ({
    AuhtorzationClient: build.mutation<
      ResponseModel<AuthorizationType>,
      AuthorizationPayload
    >({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Authorization"],
    }),
    AuthorizationGetClient: build.query<string, AuthorizationType>({
      query: (body) => ({
        url: "/user/token",
        method: "POST",
        body: body,
      }),
      providesTags: ["Authorization"],
    }),
  }),
});

export const { useAuhtorzationClientMutation, useAuthorizationGetClientQuery } =
  AuthorizationAPI;
