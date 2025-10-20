import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { ArrowDownToLine } from "lucide-react";
import { toast } from "sonner";
import { useCashInMutation } from "@/redux/features/agent/agent.api";
import { Textarea } from "@/components/ui/textarea";

export default function CashIn() {
  const [cashIn, { isLoading }] = useCashInMutation();
  const [formData, setFormData] = useState({
    amount: "",
    receiverEmail: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Number(formData.amount) <= 0) {
      toast.warning("Invalid Amount");
      return;
    }

    try {
      await cashIn({
        amount: Number(formData.amount),
        receiverEmail: formData.receiverEmail,
        description: formData.description,
      }).unwrap();

      toast.success("Cash-In Successful");

      setFormData({ amount: "", receiverEmail: "", description: "" });
    } catch (error: any) {
      toast.error("Transaction Failed", {
        description: "Failed to process cash-in. Please try again.",
      });
      console.log(error);
    }
  };

  return (
    <div className='lg:m-12 max-w-2xl space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Cash In</h1>
        <p className='text-muted-foreground'>Add money to a user's wallet</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowDownToLine className='h-5 w-5' />
            Cash In Service
          </CardTitle>
          <CardDescription>
            Enter the receiver's email and amount to add to their wallet
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='receiverEmail'>Receiver Email</Label>
              <Input
                id='receiverEmail'
                type='email'
                placeholder='user@example.com'
                value={formData.receiverEmail}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    receiverEmail: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='amount'>Amount (USD)</Label>
              <Input
                id='amount'
                type='number'
                step='10'
                min='10'
                placeholder='0.00'
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                required
              />
              <p className='text-xs text-muted-foreground'>
                You will earn commission on this transaction
              </p>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='description'>Description (Optional)</Label>
              <Textarea
                className='border-border'
                id='description'
                placeholder='Enter a description'
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            <Button type='submit' className='w-full' disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner className='mr-2' />
                  Processing...
                </>
              ) : (
                "Process Cash In"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
