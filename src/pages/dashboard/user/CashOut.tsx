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
import { ArrowUpFromLine } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useCashOutMutation } from "@/redux/features/user/user.api";

export default function CashOut() {
  const [cashOut, { isLoading }] = useCashOutMutation();
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
      await cashOut({
        amount: Number(formData.amount),
        receiverEmail: formData.receiverEmail,
        description: formData.description,
      }).unwrap();

      toast.success("Cash-Out Successful");

      setFormData({ receiverEmail: "", amount: "", description: "" });
    } catch (error: any) {
      toast.error("Transaction Failed: Agent not found | Unauthorized");
      console.log(error);
    }
  };

  return (
    <div className='lg:m-12 max-w-2xl space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Cash Out</h1>
        <p className='text-muted-foreground'>
          Cash Out money to a agent wallet
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowUpFromLine className='h-5 w-5' />
            Cash Out Service
          </CardTitle>
          <CardDescription>
            Enter the user's email and amount to withdraw from their wallet
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='amount'>Amount (USD)</Label>
              <Input
                id='amount'
                type='number'
                step='0.01'
                min='0.01'
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
              <Label htmlFor='receiverEmail'>Agent Email</Label>
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
                "Process Cash Out"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
