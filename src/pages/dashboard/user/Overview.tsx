import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Spinner } from "@/components/ui/spinner";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Send,
  ArrowDownToLine,
  ArrowUpFromLine,
  HelpCircle,
} from "lucide-react";
import { Activity } from "lucide-react";
import { useTour } from "@/lib/tour/tour-context";
import { formatCurrency, formatDate } from "@/utils/format";
import { Link } from "react-router";
import { BalanceChart } from "@/components/charts/BalanceChart";
import { TransactionChart } from "@/components/charts/TransactionChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { useWalletQuery } from "@/redux/features/user/profile.api";
import { useGetMyTransactionsQuery } from "@/redux/features/user/user.api";
import { useProfileQuery } from "@/redux/features/auth/auth.api";

export default function Overview() {
  const { data: user } = useProfileQuery(undefined);
  const { data: walletData, isLoading: walletLoading } =
    useWalletQuery(undefined);
  const { data: transactions, isLoading: transactionsLoading } =
    useGetMyTransactionsQuery({ limit: 5, page: 1 });
  const { startTour } = useTour();

  const transactionsData = transactions?.data || [];
  const totalTransactions = transactions?.meta?.total || 0;

  const totalSent = transactionsData
    .filter(
      (tx: any) =>
        tx.type === "SEND_MONEY" ||
        tx.type === "WITHDRAW_MONEY" ||
        tx.type === "CASH_OUT"
    )
    .reduce((sum: number, tx: any) => sum + tx.amount, 0);

  const totalReceived = transactionsData
    .filter(
      (tx: any) =>
        tx.type === "RECEIVE_MONEY" ||
        tx.type === "ADD_MONEY" ||
        tx.type === "CASH_IN"
    )
    .reduce((sum: number, tx: any) => sum + tx.amount, 0);

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>Dashboard</h1>
          <p className='text-muted-foreground'>
            Welcome back! Here's your wallet overview.
          </p>
        </div>
        <Button
          variant='outline'
          size='sm'
          onClick={() => startTour(user?.data?.role)}
          className='gap-2 bg-transparent'
        >
          <HelpCircle className='h-4 w-4' />
          Take Tour
        </Button>
      </div>

      <Card
        className='border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10'
        data-tour='wallet-balance'
      >
        <CardHeader>
          <CardTitle className='flex items-center gap-2 text-sm font-medium text-muted-foreground'>
            <Wallet className='h-4 w-4' />
            Available Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          {walletLoading ? (
            <Spinner />
          ) : (
            <div className='space-y-4'>
              <div className='text-4xl font-bold'>
                {formatCurrency(walletData?.data?.balance / 100 || 0)}
              </div>
              <div className='flex items-center gap-4'>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${
                    walletData?.data?.status === "ACTIVE"
                      ? "bg-primary/20 text-primary"
                      : "bg-destructive/20 text-destructive"
                  }`}
                >
                  {walletData?.data?.status === "ACTIVE" ? "Active" : "Blocked"}
                </span>
                <span className='text-sm text-muted-foreground'>
                  Wallet ID: {walletData?.data?._id}
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className='grid gap-4 md:grid-cols-3' data-tour='quick-actions'>
        <Button asChild className='h-auto flex-col gap-2 py-6'>
          <Link to='/user/send-money'>
            <Send className='h-6 w-6' />
            <span>Send Money</span>
          </Link>
        </Button>
        <Button
          asChild
          variant='outline'
          className='h-auto flex-col gap-2 py-6 bg-transparent'
        >
          <Link to='/user/add-money'>
            <ArrowDownToLine className='h-6 w-6' />
            <span>Add Money</span>
          </Link>
        </Button>
        <Button
          asChild
          variant='outline'
          className='h-auto flex-col gap-2 py-6 bg-transparent'
        >
          <Link to='/user/withdraw-money'>
            <ArrowUpFromLine className='h-6 w-6' />
            <span>Withdraw</span>
          </Link>
        </Button>
      </div>

      <div className='grid gap-4 md:grid-cols-3' data-tour='balance-overview'>
        <StatCard
          title='Total Sent'
          value={formatCurrency(totalSent / 100)}
          subtitle='This month'
          icon={<ArrowUpRight className='h-4 w-4' />}
        />
        <StatCard
          title='Total Received'
          value={formatCurrency(totalReceived / 100)}
          subtitle='This month'
          icon={<ArrowDownRight className='h-4 w-4' />}
        />
        <StatCard
          title='Transactions'
          value={totalTransactions}
          subtitle='All time'
          icon={<Activity className='h-4 w-4' />}
        />
      </div>

      {!transactionsLoading && transactionsData?.length > 0 && (
        <div
          className='grid gap-4 md:grid-cols-2'
          data-tour='recent-activities'
        >
          <TransactionChart transactions={transactionsData} />
          <BalanceChart
            transactions={transactionsData}
            currentBalance={walletData?.data?.balance || 0}
          />
        </div>
      )}

      {/* Recent Transactions */}
      <Card data-tour='recent-transactions'>
        <CardHeader className='flex flex-row items-center justify-between'>
          <CardTitle>Recent Transactions</CardTitle>
          <Button variant='ghost' size='sm' asChild>
            <Link to='/user/transactions'>View All</Link>
          </Button>
        </CardHeader>
        <CardContent>
          {transactionsLoading ? (
            <div className='flex justify-center py-8'>
              <Spinner />
            </div>
          ) : transactionsData?.length === 0 ? (
            <div className='py-8 text-center text-muted-foreground'>
              No transactions yet
            </div>
          ) : (
            <div className='space-y-4'>
              {transactionsData?.map((transaction: any) => (
                <div
                  key={transaction._id}
                  className='flex items-center justify-between rounded-lg border border-border p-4'
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
                        {formatDate(transaction.createdAt)}
                      </div>
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
                    <div className='text-sm text-muted-foreground'>
                      {transaction.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
