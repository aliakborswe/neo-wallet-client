import { baseApi } from "@/redux/baseApi";


export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllTransactions: builder.query({
      query: (params: any) => {
        const queryString = new URLSearchParams(params).toString();
        return {
          url: `/transaction/?${queryString}`,
        };
      },
      providesTags: ["TRANSACTION"],
    }),
  }),
});

export const {
  useGetAllTransactionsQuery,
} = adminApi;