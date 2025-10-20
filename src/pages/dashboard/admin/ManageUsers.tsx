import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Search, Shield, ShieldOff } from "lucide-react";
import { toast } from "sonner";
import { formatDate } from "@/utils/format";
import {
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
  useUpdateWalletStatusMutation,
} from "@/redux/features/admin/admin.api";

export default function ManageUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, refetch } = useGetAllUsersQuery(undefined);
  const [updateWalletStatus] = useUpdateWalletStatusMutation();
  const [updateUserStatus] = useUpdateUserStatusMutation();

  const users = data?.data || [];

  console.log(data);

  const filteredUsers = users.filter(
    (user: any) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleUserStatus = async (_id: string, currentStatus: string) => {
    const newStatus = currentStatus === "ACTIVE" ? "BLOCKED" : "ACTIVE";
    await updateUserStatus({ _id, status: newStatus }).unwrap();
    await updateWalletStatus({ _id, status: newStatus }).unwrap();
    toast.success("User & Wallet status updated");
    refetch();
  };

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>User Management</h1>
        <p className='text-muted-foreground'>View and manage all users</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <div className='relative mt-4'>
            <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            <Input
              placeholder='Search by name or email...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='pl-10'
            />
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className='flex justify-center py-8'>
              <Spinner />
            </div>
          ) : filteredUsers?.length === 0 ? (
            <div className='py-8 text-center text-muted-foreground'>
              No users found
            </div>
          ) : (
            <div className='space-y-4'>
              {filteredUsers?.map((user: any) => (
                <div
                  key={user._id}
                  className='flex items-center justify-between rounded-lg border border-border p-4'
                >
                  <div className='flex-1'>
                    <div className='font-medium'>{user.name}</div>
                    <div className='text-sm text-muted-foreground'>
                      {user.email}
                    </div>
                    <div className='mt-1 flex gap-2 text-xs text-muted-foreground'>
                      <span>Phone: {user.phone}</span>
                      <span>•</span>
                      <span>Joined: {formatDate(user.createdAt)}</span>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='text-right'>
                      <div
                        className={`text-sm font-medium ${
                          user.userStatus === "ACTIVE"
                            ? "text-primary"
                            : "text-destructive"
                        }`}
                      >
                        {user.userStatus || "N/A"}
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        User Status
                      </div>
                    </div>
                    {user.userStatus && (
                      <Button
                        size='sm'
                        variant={
                          user.userStatus === "ACTIVE"
                            ? "destructive"
                            : "default"
                        }
                        onClick={() =>
                          handleToggleUserStatus(user._id, user.userStatus)
                        }
                      >
                        {user.userStatus === "ACTIVE" ? (
                          <>
                            <ShieldOff className='mr-2 h-4 w-4' />
                            Block
                          </>
                        ) : (
                          <>
                            <Shield className='mr-2 h-4 w-4' />
                            Activate
                          </>
                        )}
                      </Button>
                    )}
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
