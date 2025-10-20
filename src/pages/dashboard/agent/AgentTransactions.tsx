import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  ArrowUpRight,
  ArrowDownRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useGetMyTransactionsQuery } from "@/redux/features/user/user.api";
import { formatCurrency, formatDate } from "@/utils/format";

export default function AgentTransactions() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, isLoading } = useGetMyTransactionsQuery({ limit, page });
  const transactions = data?.data || [];
  const totalPages = data?.meta?.totalPage || 1;

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Transaction History</h1>
        <p className='text-muted-foreground'>
          View all your agent transactions
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className='flex justify-center py-8'>
              <Spinner />
            </div>
          ) : transactions.length === 0 ? (
            <div className='py-8 text-center text-muted-foreground'>
              No transactions found
            </div>
          ) : (
            <>
              <div className='space-y-4'>
                {transactions.map((transaction: any) => (
                  <div
                    key={transaction._id}
                    className='flex items-center justify-between rounded-lg border border-border p-4'
                  >
                    <div className='flex items-center gap-4'>
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          transaction.type.includes("CASH_IN")
                            ? "bg-destructive/10 text-destructive"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {transaction.type.includes("CASH_IN") ? (
                          <ArrowUpRight className='h-5 w-5' />
                        ) : (
                          <ArrowDownRight className='h-5 w-5' />
                        )}
                      </div>
                      <div>
                        <div className='font-medium'>
                          {transaction.description}
                        </div>
                        <div className='text-sm text-muted-foreground'>
                          {formatDate(transaction.createdAt)} •{" "}
                          {transaction.type}
                        </div>
                        {transaction.toAccount && (
                          <div className='text-xs text-muted-foreground'>
                            To: {transaction.toAccount}
                          </div>
                        )}
                        {transaction.fromAccount && (
                          <div className='text-xs text-muted-foreground'>
                            From: {transaction.fromAccount}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='text-right'>
                      <div className='font-semibold'>
                        {formatCurrency(transaction.amount/100)}
                      </div>
                      <div
                        className={`text-sm ${
                          transaction.status === "COMPLETED"
                            ? "text-primary"
                            : transaction.status === "PENDING"
                            ? "text-chart-3"
                            : "text-destructive"
                        }`}
                      >
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className='mt-6 flex items-center justify-between'>
                  <div className='text-sm text-muted-foreground'>
                    Page {page} of {totalPages}
                  </div>
                  <div className='flex gap-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => setPage(page - 1)}
                      disabled={page === 1}
                    >
                      <ChevronLeft className='h-4 w-4' />
                      Previous
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => setPage(page + 1)}
                      disabled={page === totalPages}
                    >
                      Next
                      <ChevronRight className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
