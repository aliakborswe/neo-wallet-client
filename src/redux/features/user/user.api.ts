import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addMoney: builder.mutation({
      query: (data: { amount: number; paymentMethod: "CARD" | "BANK" }) => ({
        url: "/transaction/add-money",
        method: "POST",
        data,
      }),
      invalidatesTags: ["WALLET", "TRANSACTION"],
    }),
  }),
});

export const {
    useAddMoneyMutation,
} = userApi;