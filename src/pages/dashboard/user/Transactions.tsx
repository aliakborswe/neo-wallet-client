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
  X,
} from "lucide-react";
import { useGetMyTransactionsQuery } from "@/redux/features/user/user.api";
import { formatCurrency, formatDate } from "@/utils/format";

export default function Transactions() {
  const [page, setPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState<string>("ALL");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const limit = 10;
  const { data, isLoading } = useGetMyTransactionsQuery({ limit, page });
  const transactions = data?.data ? [data.data].flat() : [];
  const totalPages = data?.meta?.totalPage || 1;

  const filteredTransactions =
    transactions.filter((transaction: any) => {
      const matchesType =
        typeFilter === "ALL" || transaction.type === typeFilter;
      const matchesStatus =
        statusFilter === "ALL" || transaction.status === statusFilter;
      const matchesSearch =
        searchQuery === "" ||
        transaction.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        transaction.toAccount
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        transaction.fromAccount
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());

      return matchesType && matchesStatus && matchesSearch;
    }) || [];

  const resetFilters = () => {
    setTypeFilter("ALL");
    setStatusFilter("ALL");
    setSearchQuery("");
  };

  const hasActiveFilters =
    typeFilter !== "ALL" || statusFilter !== "ALL" || searchQuery !== "";

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Transaction History</h1>
        <p className='text-muted-foreground'>View all your transactions</p>
      </div>

      <Card>
        <CardHeader>
          <div className='flex items-center justify-between'>
            <CardTitle className='flex items-center gap-2'>
              <Filter className='h-5 w-5' />
              Filters
            </CardTitle>
            {hasActiveFilters && (
              <Button
                variant='destructive'
                size='sm'
                onClick={resetFilters}
                className='gap-2'
              >
                <X className='h-4 w-4' />
                Clear Filters
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className='grid gap-6 md:grid-cols-3'>
            <div className='space-y-2'>
              <label className='text-sm font-medium'>Search</label>
              <Input
                placeholder='Search transactions...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='bg-white'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-medium '>Type</label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className='bg-white'>
                  <SelectValue placeholder='All Types' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='ALL'>All Types</SelectItem>
                  <SelectItem value='SEND_MONEY'>Send Money</SelectItem>
                  <SelectItem value='ADD_MONEY'>Add Money</SelectItem>
                  <SelectItem value='WITHDRAW'>Withdraw</SelectItem>
                  <SelectItem value='CASH_IN'>Cash In</SelectItem>
                  <SelectItem value='CASH_OUT'>Cash Out</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-medium'>Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className='bg-white'>
                  <SelectValue placeholder='All Status' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='ALL'>All Status</SelectItem>
                  <SelectItem value='COMPLETED'>Completed</SelectItem>
                  <SelectItem value='PENDING'>Pending</SelectItem>
                  <SelectItem value='FAILED'>Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            All Transactions
            {hasActiveFilters && (
              <span className='ml-2 text-sm font-normal text-muted-foreground'>
                ({filteredTransactions.length} results)
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className='flex justify-center py-8'>
              <Spinner />
            </div>
          ) : filteredTransactions.length === 0 ? (
            <div className='py-8 text-center text-muted-foreground'>
              {hasActiveFilters
                ? "No transactions match your filters"
                : "No transactions found"}
            </div>
          ) : (
            <>
              <div className='space-y-4'>
                {filteredTransactions.map((transaction: any) => (
                  <div
                    key={transaction._id}
                    className='flex items-center justify-between rounded-lg border border-border p-4 bg-white'
                  >
                    <div className='flex items-center gap-4'>
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          transaction.type.includes("SEND") ||
                          transaction.type.includes("WITHDRAW")
                            ? "bg-destructive/10 text-destructive"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {transaction.type.includes("SEND") ||
                        transaction.type.includes("WITHDRAW") ? (
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
                      <div
                        className={`font-semibold ${
                          transaction.type.includes("SEND") ||
                          transaction.type.includes("WITHDRAW")
                            ? "text-destructive"
                            : "text-primary"
                        }`}
                      >
                        {transaction.type.includes("SEND") ||
                        transaction.type.includes("WITHDRAW")
                          ? "-"
                          : "+"}
                        {formatCurrency(transaction.amount)}
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

              {/* Pagination */}
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
