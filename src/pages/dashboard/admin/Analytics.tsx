import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { useTour } from "@/lib/tour/tour-context";
import {
  useGetAllAgentsQuery,
  useGetAllTransactionsQuery,
  useGetAllUsersQuery,
  useGetAllWalletsQuery,
} from "@/redux/features/admin/admin.api";
import { useProfileQuery } from "@/redux/features/auth/auth.api";
import { HelpCircle, TrendingUp, UserCheck, Users, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionChart } from "@/components/charts/TransactionChart";
import { TransactionTypeChart } from "@/components/charts/TransactionTypeChart";

export default function Analytics() {
  const { data: user } = useProfileQuery(undefined);
  const { data: usersData, isLoading: usersLoading } =
    useGetAllUsersQuery(undefined);
  const { data: agentsData, isLoading: agentsLoading } =
    useGetAllAgentsQuery(undefined);
  const { data: walletsData, isLoading: walletsLoading } =
    useGetAllWalletsQuery(undefined);
  const { data: transactions, isLoading: transactionsLoading } =
    useGetAllTransactionsQuery({});

  const transactionsData = transactions?.data || [];
  const { startTour } = useTour();

  const totalUsers = usersData?.data?.length || 0;
  const totalAgents = agentsData?.data?.length || 0;
  const pendingAgents =
    agentsData?.data?.filter((agent: any) => agent.approvalStatus === "PENDING")
      .length || 0;
  const totalWallets = walletsData?.data?.length || 0;
  const totalTransactions = transactions?.meta?.total || 0;

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>Admin Dashboard</h1>
          <p className='text-muted-foreground'>
            System overview and management
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

      <div
        className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'
        data-tour='admin-stats'
      >
        <StatCard
          title='Total Users'
          value={totalUsers}
          subtitle='Registered users'
          icon={<Users className='h-4 w-4' />}
          isLoading={usersLoading}
        />
        <StatCard
          title='Total Agents'
          value={totalAgents}
          subtitle={`${pendingAgents} pending approval`}
          icon={<UserCheck className='h-4 w-4' />}
          isLoading={agentsLoading}
          variant={pendingAgents > 0 ? "warning" : "default"}
        />
        <StatCard
          title='Total Wallets'
          value={totalWallets}
          subtitle='Active wallets'
          icon={<Wallet className='h-4 w-4' />}
          isLoading={walletsLoading}
        />
        <StatCard
          title='Transactions'
          value={totalTransactions}
          subtitle='All time'
          icon={<TrendingUp className='h-4 w-4' />}
          isLoading={transactionsLoading}
        />
      </div>

      {/* Quick Stats Grid */}
      <div className='grid gap-4 md:grid-cols-2'>
        <Card data-tour='recent-activities'>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-muted-foreground'>
                  Active Users
                </span>
                <span className='font-medium'>{totalUsers}</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-muted-foreground'>
                  Approved Agents
                </span>
                <span className='font-medium'>
                  {totalAgents - pendingAgents}
                </span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-muted-foreground'>
                  Pending Agents
                </span>
                <span className='font-medium text-chart-3'>
                  {pendingAgents}
                </span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-muted-foreground'>
                  Total Transactions
                </span>
                <span className='font-medium'>{totalTransactions}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-tour='system-health'>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-muted-foreground'>
                  System Status
                </span>
                <span className='font-medium text-primary'>Operational</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-muted-foreground'>
                  API Status
                </span>
                <span className='font-medium text-primary'>Online</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-muted-foreground'>Database</span>
                <span className='font-medium text-primary'>Connected</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-muted-foreground'>Uptime</span>
                <span className='font-medium'>99.9%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {!transactionsLoading && transactionsData.length > 0 && (
        <div className='grid gap-4 md:grid-cols-2'>
          <TransactionChart
            transactions={transactionsData}
            title='Agent Activity'
          />
          <TransactionTypeChart transactions={transactionsData} />
        </div>
      )}
    </div>
  );
}
