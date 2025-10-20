
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useGetAllWalletsQuery } from "@/redux/features/admin/admin.api";
import { formatCurrency } from "@/utils/format";

export default function AllWallet() {
  const { data, isLoading } = useGetAllWalletsQuery(undefined);

    const wallets = data?.data || [];



  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>All Wallet</h1>
        <p className='text-muted-foreground'>View all wallets</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Wallets</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className='flex justify-center py-8'>
              <Spinner />
            </div>
          ) : wallets.length === 0 ? (
            <div className='py-8 text-center text-muted-foreground'>
              No wallets found
            </div>
          ) : (
            <div className='space-y-4'>
              {wallets.map((wallet: any) => (
                <div
                  key={wallet._id}
                  className='flex items-center justify-between rounded-lg border border-border p-4 bg-background/50'
                >
                  <div className='flex-1'>
                    <div className='font-medium'>
                      {wallet.userId?.name || "Unknown User"}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {wallet.userId?.email || "N/A"}
                    </div>
                    <div className='mt-1 text-xs text-muted-foreground'>
                      Wallet ID: {wallet._id}
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='text-right'>
                      <div className='text-lg font-bold'>
                        {formatCurrency(wallet.balance / 100)}
                      </div>
                      <div
                        className={`text-sm font-medium ${
                          wallet.status === "ACTIVE"
                            ? "text-primary"
                            : "text-destructive"
                        }`}
                      >
                        {wallet.status}
                      </div>
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
