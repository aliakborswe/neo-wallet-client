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
  }),
});

export const { useWalletQuery } = profileApi;
