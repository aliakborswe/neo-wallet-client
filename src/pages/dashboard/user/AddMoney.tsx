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
import { ArrowDownToLine } from "lucide-react";
import { toast } from "sonner";
import { useAddMoneyMutation } from "@/redux/features/user/user.api";

export default function AddMoney() {
  const [addMoney, { isLoading }] = useAddMoneyMutation();
  const [formData, setFormData] = useState({
    amount: "",
    paymentMethod: "CARD" as "CARD" | "BANK",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Number(formData.amount) <= 0) {
      toast.warning("Invalid Amount");
      return;
    }

    try {
      await addMoney({
        amount: Number(formData.amount),
        paymentMethod: formData.paymentMethod,
      }).unwrap();

      toast.success("Money Added Successfully");

      setFormData({ amount: "", paymentMethod: "CARD" });
    } catch (error: any) {
      toast.error("Transaction Failed");
      console.error("Add Money Error:", error);
    }
  };

  return (
        <div className=' max-w-3xl space-y-6 lg:m-12'>
          <div>
            <h1 className='text-3xl font-bold'>Add Money</h1>
            <p className='text-muted-foreground'>Top up your wallet balance</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <ArrowDownToLine className='h-5 w-5' />
                Add Money
              </CardTitle>
              <CardDescription>
                Choose your payment method and enter the amount
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='amount'>Amount (BDT)</Label>
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
                    No fees for adding money
                  </p>
                </div>

                <div className='space-y-3'>
                  <Label>Payment Method</Label>
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
                      <RadioGroupItem value='CARD' id='card' />
                      <Label htmlFor='card' className='flex-1 cursor-pointer'>
                        <div className='font-medium'>Debit/Credit Card</div>
                        <div className='text-xs text-muted-foreground'>
                          Instant transfer
                        </div>
                      </Label>
                    </div>
                    <div className='flex items-center space-x-2 rounded-lg border border-border p-3 hover:border-primary'>
                      <RadioGroupItem value='BANK' id='bank' />
                      <Label htmlFor='bank' className='flex-1 cursor-pointer'>
                        <div className='font-medium'>Bank Transfer</div>
                        <div className='text-xs text-muted-foreground'>
                          1-3 business days
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type='submit' className='w-full' disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Spinner className='mr-2' />
                      Processing...
                    </>
                  ) : (
                    "Add Money"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
  );
}
