import { baseApi } from "@/redux/baseApi";

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    cashIn: builder.mutation({
      query: (data: {
        receiverEmail: string;
        amount: number;
        description?: string;
      }) => ({
        url: "/transaction/cash-in",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["TRANSACTION", "USER", "WALLET"],
    }),
    getMyCommission: builder.query({
      query: () => ({
        url: "/commission",
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
  }),
});

export const { useCashInMutation, useGetMyCommissionQuery } = agentApi;
