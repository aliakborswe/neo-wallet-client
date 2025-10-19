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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Spinner } from "@/components/ui/spinner";
import { ArrowUpFromLine } from "lucide-react";
import { useWithdrawMoneyMutation } from "@/redux/features/user/user.api";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

export default function WithdrawMoney() {
  const [withdrawMoney, { isLoading }] = useWithdrawMoneyMutation();
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    paymentMethod: "BANK" as "CARD" | "BANK",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Number(formData.amount) <= 0) {
      toast.warning("Invalid Amount");
      return;
    }

    try {
      await withdrawMoney({
        amount: Number(formData.amount),
        description: formData.description,
        paymentMethod: formData.paymentMethod,
      }).unwrap();

      toast.success("Withdrawal Successful");

      setFormData({ amount: "", description: "", paymentMethod: "BANK" });
    } catch (error: any) {
      toast.error(`Withdrawal Failed: Insufficient Balance`);
      console.log(error);
    }
  };

  return (
    <div className='lg:m-12 max-w-2xl space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Withdraw Money</h1>
        <p className='text-muted-foreground'>
          Transfer money from your wallet to your bank account
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowUpFromLine className='h-5 w-5' />
            Withdraw Money
          </CardTitle>
          <CardDescription>
            Choose your withdrawal method and enter the amount
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
                Withdrawal fee: 1.5% of amount
              </p>
            </div>
            <div>
                <Label htmlFor='description'>Description (Optional)</Label>
                <Textarea
                  id='description'
                  placeholder='Enter a description'
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
            </div>

            <div className='space-y-3'>
              <Label>Withdrawal Method</Label>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    paymentMethod: value as "CARD" | "BANK",
                  })
                }
              >
                <div className='flex items-center space-x-2 rounded-lg border border-border p-3 hover:border-primary'>
                  <RadioGroupItem value='BANK' id='bank' />
                  <Label htmlFor='bank' className='flex-1 cursor-pointer'>
                    <div className='font-medium'>Bank Transfer</div>
                    <div className='text-xs text-muted-foreground'>
                      1-3 business days
                    </div>
                  </Label>
                </div>
                <div className='flex items-center space-x-2 rounded-lg border border-border p-3 hover:border-primary'>
                  <RadioGroupItem value='CARD' id='card' />
                  <Label htmlFor='card' className='flex-1 cursor-pointer'>
                    <div className='font-medium'>Debit Card</div>
                    <div className='text-xs text-muted-foreground'>
                      Instant transfer
                    </div>
                  </Label>
                </div>
              </RadioGroup>
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
                  <span className='text-muted-foreground'>Fee (1.5%)</span>
                  <span className='font-medium'>
                    ${(Number(formData.amount) * 0.015).toFixed(2)}
                  </span>
                </div>
                <div className='mt-2 flex justify-between border-t border-border pt-2 font-semibold'>
                  <span>You'll Receive</span>
                  <span>${(Number(formData.amount) * 0.985).toFixed(2)}</span>
                </div>
              </div>
            )}

            <Button type='submit' className='w-full' disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner className='mr-2' />
                  Processing...
                </>
              ) : (
                "Withdraw Money"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
