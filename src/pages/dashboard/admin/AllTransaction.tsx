import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import {
  ArrowUpRight,
  ArrowDownRight,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import { formatCurrency, formatDate } from "@/utils/format";
import { useGetAllTransactionsQuery } from "@/redux/features/admin/admin.api";

export default function AllTransaction() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    type: "ALL_TYPES",
    amount: "",
    toAccount: "",
    fromAccount: "",
  });
  const [showFilters, setShowFilters] = useState(false);

  const limit = 10;
  const queryParams: any = { limit, page };

  if (filters.type !== "ALL_TYPES") queryParams.type = filters.type;
  if (filters.amount) queryParams.amount = filters.amount;
  if (filters.toAccount) queryParams.toAccount = filters.toAccount;
  if (filters.fromAccount) queryParams.fromAccount = filters.fromAccount;

  const { data, isLoading } = useGetAllTransactionsQuery(queryParams);

  const transactions = data?.data || [];
  const totalPages = data?.meta?.totalPage || 1;

  const handleClearFilters = () => {
    setFilters({
      type: "ALL_TYPES",
      amount: "",
      toAccount: "",
      fromAccount: "",
    });
  };

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>All Transactions</h1>
          <p className='text-muted-foreground'>
            View and filter all system transactions
          </p>
        </div>
        <Button variant='default' onClick={() => setShowFilters(!showFilters)}>
          <Filter className='mr-2 h-4 w-4' />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      {showFilters && (
        <Card>
          <CardHeader className='flex items-center justify-between'>
            <CardTitle>Filters</CardTitle>
            <Button
              variant='destructive'
              size='sm'
              onClick={handleClearFilters}
            >
              Clear Filters
            </Button>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Transaction Type</label>
                <Select
                  value={filters.type}
                  onValueChange={(value) =>
                    setFilters({ ...filters, type: value })
                  }
                >
                  <SelectTrigger className='bg-white'>
                    <SelectValue placeholder='All types' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='ALL_TYPES'>All types</SelectItem>
                    <SelectItem value='SEND_MONEY'>Send Money</SelectItem>
                    <SelectItem value='ADD_MONEY'>Add Money</SelectItem>
                    <SelectItem value='WITHDRAW_MONEY'>
                      Withdraw Money
                    </SelectItem>
                    <SelectItem value='CASH_IN'>Cash In</SelectItem>
                    <SelectItem value='CASH_OUT'>Cash Out</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium'>Amount</label>
                <Input
                  type='number'
                  placeholder='Filter by amount'
                  value={filters.amount}
                  onChange={(e) =>
                    setFilters({ ...filters, amount: e.target.value })
                  }
                  className='bg-white'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium'>To Account</label>
                <Input
                  placeholder='Recipient email'
                  value={filters.toAccount}
                  onChange={(e) =>
                    setFilters({ ...filters, toAccount: e.target.value })
                  }
                  className='bg-white'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium'>From Account</label>
                <Input
                  placeholder='Sender email'
                  value={filters.fromAccount}
                  onChange={(e) =>
                    setFilters({ ...filters, fromAccount: e.target.value })
                  }
                  className='bg-white'
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
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
                    className='sm:flex items-center justify-between rounded-lg border border-border p-4 bg-white'
                  >
                    <div className='flex items-center gap-4'>
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          transaction.type.includes("SEND") ||
                          transaction.type.includes("WITHDRAW") ||
                          transaction.type.includes("CASH_OUT")
                            ? "bg-destructive/10 text-destructive"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {transaction.type.includes("SEND") ||
                        transaction.type.includes("WITHDRAW") ||
                        transaction.type.includes("CASH_OUT") ? (
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
                        <div className='flex gap-2 text-xs text-muted-foreground'>
                          {transaction.fromAccount && (
                            <span>From: {transaction.fromAccount}</span>
                          )}
                          {transaction.toAccount && (
                            <span>To: {transaction.toAccount}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='pl-12 pt-2 sm:pt-0 sm:pl-0 sm:text-right text-orange-400'>
                      <div className='font-semibold'>
                        {formatCurrency(transaction.amount / 100)}
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
                    Page {page} of {totalPages} • Total: {data?.data?.total}{" "}
                    transactions
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
