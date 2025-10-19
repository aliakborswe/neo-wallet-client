import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useProfileQuery } from "@/redux/features/auth/auth.api";
import { useWalletQuery } from "@/redux/features/user/profile.api";

export default function Wallet() {
  const { data, isLoading } = useWalletQuery(undefined);
  const { data: loggedInUser } = useProfileQuery(undefined);
  const wallet = data?.data;
  const user = loggedInUser?.data;

  return (
    <div className='space-y-6 lg:m-12'>
      <div>
        <h1 className='text-3xl font-bold'>My Wallet</h1>
      </div>

      <Card className='w-full max-w-3xl'>
        <CardContent>
          {isLoading ? (
            <div className='flex justify-center py-8'>
              <Spinner />
            </div>
          ) : wallet.length === 0 ? (
            <div className='py-8 text-center text-muted-foreground'>
              No wallet found
            </div>
          ) : (
            <div className='flex justify-between rounded-lg border border-border p-8 shadow-2xl'>
              <div className='flex-1 space-y-3'>
                <div className='font-medium'>
                  <strong>Wallet Owner: </strong>
                  {user?.name || "Unknown User"}
                </div>
                <div className='text-sm text-muted-foreground'>
                  <strong>Owner Account: </strong>
                  {wallet.account || "N/A"}
                </div>
                <div className='mt-1 text-xs text-muted-foreground'>
                  <strong>Wallet ID: </strong> {wallet._id}
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='text-right'>
                  <div className='text-lg font-bold'>
                    <strong>Ballance: </strong>
                    <span className='text-chart-3'>
                      ৳{wallet.balance / 100}
                    </span>
                  </div>
                  <div>
                    <strong>Status: </strong>
                    <span
                      className={`text-sm font-medium ${
                        wallet.status === "ACTIVE"
                          ? "text-primary"
                          : "text-destructive"
                      }`}
                    >
                      {wallet.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
