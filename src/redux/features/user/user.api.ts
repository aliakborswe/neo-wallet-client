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
      query: (data: {
        amount: number;
        description: string;
        paymentMethod: "CARD" | "BANK";
      }) => ({
        url: "/transaction/withdraw-money",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["WALLET", "TRANSACTION"],
    }),
    sendMoney: builder.mutation({
      query: (data: {
        receiverEmail: string;
        amount: number;
        description?: string;
      }) => ({
        url: "/transaction/send-money",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["WALLET", "TRANSACTION"],
    }),
    cashOut: builder.mutation({
      query: (data: {
        amount: number;
        receiverEmail: string;
        description?: string;
      }) => ({
        url: "/transaction/cash-out",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["WALLET", "TRANSACTION"],
    }),
  }),
});

export const {
  useAddMoneyMutation,
  useWithdrawMoneyMutation,
  useSendMoneyMutation,
  useCashOutMutation,
} = userApi;
