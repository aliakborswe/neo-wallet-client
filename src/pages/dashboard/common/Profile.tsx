import { Card, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useProfileQuery } from "@/redux/features/auth/auth.api";

export default function Profile() {
      const { data: loggedInUser, isLoading } = useProfileQuery(undefined);
      const user = loggedInUser?.data;
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>My Profile</h1>
      </div>

      <Card className='w-full max-w-3xl'>
        <CardContent>
          {isLoading ? (
            <div className='flex justify-center py-8'>
              <Spinner />
            </div>
          ) : user.length === 0 ? (
            <div className='py-8 text-center text-muted-foreground'>
              No profile found
            </div>
          ) : (
            <div className='flex justify-between rounded-lg border border-border p-8 shadow-2xl'>
              <div className='flex-1 space-y-3'>
                <div className='font-medium'>
                  <strong>Name: </strong>
                  {user?.name || "Unknown User"}
                </div>
                <div className='mt-1 text-xs text-muted-foreground'>
                  <strong>Email: </strong> {user.email}
                </div>
                <div className='mt-1 text-xs text-muted-foreground'>
                  <strong>Phone: </strong> {user.phone}
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='text-right'>
                  <div className='text-lg font-bold'>
                    <strong>Role: </strong>
                    <span className='text-chart-3'>{user.role}</span>
                  </div>
                  <div>
                    <strong>Status: </strong>
                    <span
                      className={`text-sm font-medium ${
                        user.userStatus === "ACTIVE"
                          ? "text-primary"
                          : "text-destructive"
                      }`}
                    >
                      {user.userStatus}
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
