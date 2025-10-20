import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Spinner } from "@/components/ui/spinner";
import { Search, CheckCircle, XCircle } from "lucide-react";
import { toast } from "sonner";
import { formatDate } from "@/utils/format";
import {
  useGetAllAgentsQuery,
  useUpdateAgentStatusMutation,
} from "@/redux/features/admin/admin.api";

export default function ManageAgents() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, refetch } = useGetAllAgentsQuery(undefined);
  const [updateAgentStatus] = useUpdateAgentStatusMutation();
  const agents = data?.data || [];

  const filteredAgents = agents.filter(
    (agent: any) =>
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdateStatus = async (
    agentId: string,
    status: "APPROVED" | "SUSPEND"
  ) => {
    try {
      const data = { agentId: agentId, approvalStatus: status };
      await updateAgentStatus(data).unwrap();

      toast.success("Agent Status Updated");

      refetch();
    } catch (error: any) {
      toast.error(" Failed to update agent status");
      console.log(error);
    }
  };

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Agent Management</h1>
        <p className='text-muted-foreground'>Approve and manage agents</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Agents</CardTitle>
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
          ) : filteredAgents?.length === 0 ? (
            <div className='py-8 text-center text-muted-foreground'>
              No agents found
            </div>
          ) : (
            <div className='space-y-4'>
              {filteredAgents?.map((agent: any) => (
                <div
                  key={agent._id}
                  className='space-y-8 lg:flex w-fit lg:w-full items-center sm:justify-between rounded-lg border border-border p-4'
                >
                  <div className='flex-1'>
                    <div className='font-medium'>{agent.name}</div>
                    <div className='text-sm text-muted-foreground'>
                      {agent.email}
                    </div>
                    <div className='mt-1 flex gap-2 text-xs text-muted-foreground'>
                      <span>Phone: {agent.phone}</span>
                      <span>•</span>
                      <span>Joined: {formatDate(agent.createdAt)}</span>
                      <span>•</span>
                      <span>Fee: {agent.agentInfo.txnfees / 100}%</span>
                    </div>
                  </div>
                  <div className='gap-4 items-center flex flex-col sm:flex-row mt-4 sm:mt-0'>
                    <div className='border text-center w-fit rounded-tl-3xl rounded-br-3xl px-4 py-1 border-yellow-300'>
                      <div
                        className={`text-sm font-medium ${
                          agent.agentInfo.approvalStatus === "APPROVED"
                            ? "text-primary"
                            : agent.agentInfo.approvalStatus === "PENDING" ||
                              agent.agentInfo.approvalStatus === "SUSPEND"
                            ? "text-chart-3"
                            : "text-destructive"
                        }`}
                      >
                        {agent.agentInfo.approvalStatus}
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Status
                      </div>
                    </div>
                    {
                      <div className='flex gap-2'>
                        <Button
                          size='sm'
                          onClick={() =>
                            handleUpdateStatus(agent._id, "APPROVED")
                          }
                        >
                          <CheckCircle className='mr-2 h-4 w-4' />
                          Approve
                        </Button>
                        <Button
                          size='sm'
                          variant='destructive'
                          onClick={() =>
                            handleUpdateStatus(agent._id, "SUSPEND")
                          }
                        >
                          <XCircle className='mr-2 h-4 w-4' />
                          Suspend
                        </Button>
                      </div>
                    }
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
