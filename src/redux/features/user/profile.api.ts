import { baseApi } from "@/redux/baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    wallet: builder.query({
      query: () => ({
        url: "/wallet/my-wallet",
        method: "GET",
      }),
      providesTags: ["WALLET"],
    }),
    updateProfile: builder.mutation({
      query: (userInfo) => ({
        url: "/user/update-profile",
        method: "PATCH",
        data: userInfo,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const { useWalletQuery, useUpdateProfileMutation } = profileApi;
