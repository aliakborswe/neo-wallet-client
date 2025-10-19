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
import { Send } from "lucide-react";
import { useSendMoneyMutation } from "@/redux/features/user/user.api";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

export default function SendMoney() {
  const [sendMoney, { isLoading }] = useSendMoneyMutation();
  const [formData, setFormData] = useState({
    receiverEmail: "",
    amount: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Number(formData.amount) <= 0) {
      toast.warning("Invalid Amount");
      return;
    }

    try {
      await sendMoney({
        receiverEmail: formData.receiverEmail,
        amount: Number(formData.amount),
        description: formData.receiverEmail,
      }).unwrap();

      toast.success("Money Sent Successfully");

      setFormData({ receiverEmail: "", description: "", amount: "" });
    } catch (error: any) {
      toast("Transaction Failed");
      console.log(error);
    }
  };

  return (
    <div className='lg:m-12 max-w-2xl space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Send Money</h1>
        <p className='text-muted-foreground'>
          Transfer money to another Neo Wallet user instantly
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Send className='h-5 w-5' />
            Send Money
          </CardTitle>
          <CardDescription>
            Enter the recipient's email and amount to send
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='receiverEmail'>Recipient Email</Label>
              <Input
                className='border-border'
                id='receiverEmail'
                type='email'
                placeholder='recipient@example.com'
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

            <div className='space-y-2'>
              <Label htmlFor='amount'>Amount (USD)</Label>
              <Input
                className='border-border'
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
                Transaction fee: 1% of amount
              </p>
            </div>

            {formData.amount && Number(formData.amount) > 0 && (
              <div className='rounded-lg border border-border bg-muted/50 p-4'>
                <div className='flex justify-between text-sm'>
                  <span className='text-muted-foreground'>Amount</span>
                  <span className='font-medium'>
                    ${Number(formData.amount).toFixed(2)}
                  </span>
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-muted-foreground'>Fee (1%)</span>
                  <span className='font-medium'>
                    ${(Number(formData.amount) * 0.01).toFixed(2)}
                  </span>
                </div>
                <div className='mt-2 flex justify-between border-t border-border pt-2 font-semibold'>
                  <span>Total</span>
                  <span>${(Number(formData.amount) * 1.01).toFixed(2)}</span>
                </div>
              </div>
            )}

            <Button type='submit' className='w-full' disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner className='mr-2' />
                  Sending...
                </>
              ) : (
                "Send Money"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
