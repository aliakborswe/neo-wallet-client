import { baseApi } from "@/redux/baseApi";

interface formData {
  amount: number;
  description?: string;
  paymentMethod: "CARD" | "BANK";
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addMoney: builder.mutation({
      query: (addMoneyInfo: formData) => ({
        url: "/transaction/add-money",
        method: "POST",
        data: addMoneyInfo,
      }),
      invalidatesTags: ["WALLET", "TRANSACTION"],
    }),

    withdrawMoney: builder.mutation({
      query: (data: { amount: number; description: string; paymentMethod: "CARD" | "BANK" }) => ({
        url: "/transaction/withdraw-money",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["WALLET", "TRANSACTION"],
    }),
  }),
});

export const { useAddMoneyMutation, useWithdrawMoneyMutation } = userApi;
