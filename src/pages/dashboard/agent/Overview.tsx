import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Spinner } from "@/components/ui/spinner";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  DollarSign,
  ArrowDownToLine,
  ArrowUpFromLine,
  HelpCircle,
} from "lucide-react";
import { formatCurrency, formatDate } from "@/utils/format";
import { Link } from "react-router";
import { TransactionTypeChart } from "@/components/charts/TransactionTypeChart";
import { TransactionChart } from "@/components/charts/TransactionChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { useTour } from "@/lib/tour/tour-context";
import { useProfileQuery } from "@/redux/features/auth/auth.api";
import { useWalletQuery } from "@/redux/features/user/profile.api";
import { useGetMyTransactionsQuery } from "@/redux/features/user/user.api";
import { useGetMyCommissionQuery } from "@/redux/features/agent/agent.api";

export default function Overview() {
  const { data: user } = useProfileQuery(undefined);
  const { data: walletData, isLoading: walletLoading } =
    useWalletQuery(undefined);
  const { data: transactions, isLoading: transactionsLoading } =
    useGetMyTransactionsQuery({ limit: 5, page: 1 });
  const { data: agentComm, isLoading: commissionLoading } =
    useGetMyCommissionQuery(undefined);
  const { startTour } = useTour();

  const isApproved = user?.data?.userStatus === "ACTIVE";
  const commissionData = agentComm?.data || [];
  const transactionsData = transactions?.data || [];

  const totalCommission = commissionData.reduce(
    (sum: number, item: { commission: number }) => sum + (item.commission || 0),
    0
  );

  const totalCashIn = transactionsData.reduce(
    (sum: number, item: { type: string; amount: number }) =>
      item.type === "CASH_IN" ? sum + item.amount : sum,
    0
  );

  const totalCashOut = transactionsData.reduce(
    (sum: number, item: { type: string; amount: number }) =>
      item.type === "CASH_OUT" ? sum + item.amount : sum,
    0
  );

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>Agent Dashboard</h1>
          <p className='text-muted-foreground'>
            Manage cash-in and cash-out services
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

      {/* Approval Status Warning */}
      {!isApproved && (
        <Card
          className='border-chart-3 bg-chart-3/10'
          data-tour='approval-status'
        >
          <CardContent className='pt-6'>
            <div className='flex items-start gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-chart-3/20 text-chart-3'>
                <TrendingUp className='h-5 w-5' />
              </div>
              <div>
                <h3 className='font-semibold'>Pending Approval</h3>
                <p className='text-sm text-muted-foreground'>
                  Your agent account is pending admin approval. You'll be able
                  to perform cash-in and cash-out operations once approved.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className='grid gap-4 md:grid-cols-4' data-tour='agent-stats'>
        <StatCard
          title='Wallet Balance'
          value={formatCurrency(walletData?.data?.balance / 100 || 0)}
          subtitle={
            walletData?.data?.status === "ACTIVE" ? "Active" : "Blocked"
          }
          icon={<Wallet className='h-4 w-4' />}
          isLoading={walletLoading}
          variant='primary'
        />
        <StatCard
          title='Total Commission'
          value={formatCurrency(totalCommission / 100 || 0)}
          subtitle='All time earnings'
          icon={<DollarSign className='h-4 w-4' />}
          isLoading={commissionLoading}
        />
        <StatCard
          title='Cash-In Total'
          value={formatCurrency(totalCashIn / 100)}
          subtitle='This month'
          icon={<ArrowDownRight className='h-4 w-4' />}
        />
        <StatCard
          title='Cash-Out Total'
          value={formatCurrency(totalCashOut / 100)}
          subtitle='This month'
          icon={<ArrowUpRight className='h-4 w-4' />}
        />
      </div>

      {/* Quick Actions */}
      {isApproved && (
        <div className='grid gap-4 md:grid-cols-2' data-tour='cash-services'>
          <Button asChild className='h-auto flex-col gap-2 py-6'>
            <Link to='/agent/cash-in'>
              <ArrowDownToLine className='h-6 w-6' />
              <span>Cash In</span>
              <span className='text-xs opacity-80'>
                Add money to user wallet
              </span>
            </Link>
          </Button>
          <Button
            asChild
            variant='outline'
            className='h-auto flex-col gap-2 py-6 bg-transparent'
          >
            <Link to='/user/cash-out'>
              <ArrowUpFromLine className='h-6 w-6' />
              <span>Cash Out</span>
              <span className='text-xs opacity-80'>
                Withdraw from user wallet
              </span>
            </Link>
          </Button>
        </div>
      )}

      {!transactionsLoading && transactionsData.length > 0 && (
        <div className='grid gap-4 md:grid-cols-2'>
          <TransactionChart
            transactions={transactionsData}
            title='Agent Activity'
          />
          <TransactionTypeChart transactions={transactionsData} />
        </div>
      )}

      {/* Recent Transactions */}
      <Card data-tour='recent-transactions'>
        <CardHeader className='flex flex-row items-center justify-between'>
          <CardTitle>Recent Transactions</CardTitle>
          <Button variant='ghost' size='sm' asChild>
            <Link to='/agent/transactions'>View All</Link>
          </Button>
        </CardHeader>
        <CardContent>
          {transactionsLoading ? (
            <div className='flex justify-center py-8'>
              <Spinner />
            </div>
          ) : transactionsData.length === 0 ? (
            <div className='py-8 text-center text-muted-foreground'>
              No transactions yet
            </div>
          ) : (
            <div className='space-y-4'>
              {transactionsData.map((transaction: any) => (
                <div
                  key={transaction._id}
                  className='flex items-center justify-between rounded-lg border border-border p-4'
                >
                  <div className='flex items-center gap-4'>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        transaction.type.includes("CASH_OUT")
                          ? "bg-destructive/10 text-destructive"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {transaction.type.includes("CASH_OUT") ? (
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
                    <div className='font-semibold'>
                      {formatCurrency(transaction.amount / 100)}
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
