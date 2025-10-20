import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useGetMyCommissionQuery } from "@/redux/features/agent/agent.api";
import { formatCurrency, formatDate } from "@/utils/format";
import { DollarSign, TrendingUp } from "lucide-react";

export default function Commission() {
  const { data, isLoading } = useGetMyCommissionQuery(undefined);
  const commissionData = data?.data || [];

  const totalCommission = commissionData.reduce(
    (sum: number, item: { commission: number }) => sum + (item.commission || 0),
    0
  );

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const thisMonthCommission = commissionData
    .filter((item: { createdAt: string }) => {
      const date = new Date(item.createdAt);
      return (
        date.getMonth() === currentMonth && date.getFullYear() === currentYear
      );
    })
    .reduce(
      (sum: number, item: { commission: number }) =>
        sum + (item.commission || 0),
      0
    );

 

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Commission History</h1>
        <p className='text-muted-foreground'>
          Track your earnings from agent services
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        <Card className='border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Commission
            </CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <div className='text-3xl font-bold'>
                  {formatCurrency(totalCommission || 0)}
                </div>
                <p className='text-xs text-muted-foreground'>
                  All time earnings
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>This Month</CardTitle>
            <TrendingUp className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold'>
              {formatCurrency(thisMonthCommission)}
            </div>
            <p className='text-xs text-muted-foreground'>
              Current month earnings
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Commission Details</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className='flex justify-center py-8'>
              <Spinner />
            </div>
          ) : commissionData.length === 0 ? (
            <div className='py-8 text-center text-muted-foreground'>
              No commission records yet
            </div>
          ) : (
            <div className='space-y-4'>
              {commissionData.map((commission: any) => (
                <div
                  key={commission._id}
                  className='flex items-center justify-between rounded-lg border border-border p-4 bg-white'
                >
                  <div>
                    <div className='font-medium'>
                      {commission.transactionType}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {formatDate(commission.createdAt)}
                    </div>
                  </div>
                  <div className='text-right'>
                    <div className='font-semibold text-primary'>
                      {formatCurrency(commission.commission)}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      Commission
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
