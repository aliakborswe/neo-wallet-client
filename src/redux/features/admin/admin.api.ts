import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/user/all-user",
      }),
      providesTags: ["USER"],
    }),
    getAllAgents: builder.query({
      query: () => ({
        url: "/user/all-agent",
      }),
      providesTags: ["USER"],
    }),
    getAllWallets: builder.query({
      query: () => ({
        url: "/wallet",
      }),
      providesTags: ["WALLET"],
    }),

    getAllTransactions: builder.query({
      query: (params: any) => {
        const queryString = new URLSearchParams(params).toString();
        return {
          url: `/transaction/?${queryString}`,
        };
      },
      providesTags: ["TRANSACTION"],
    }),
    updateAgentStatus: builder.mutation({
      query: (data: { agentId: string; approvalStatus: string }) => ({
        url: "/user/agent-status",
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["USER"],
    }),
    updateUserStatus: builder.mutation({
      query: (data: { _id: string; status: string }) => ({
        url: "/user/status",
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["USER", "WALLET"],
    }),
    updateWalletStatus: builder.mutation({
      query: (data: { _id: string; status: string }) => ({
        url: "/wallet/status",
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["USER", "WALLET"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetAllAgentsQuery,
  useGetAllWalletsQuery,
  useGetAllTransactionsQuery,
  useUpdateAgentStatusMutation,
  useUpdateUserStatusMutation,
  useUpdateWalletStatusMutation,
} = adminApi;
