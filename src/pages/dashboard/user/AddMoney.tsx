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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const paymentSchema = z.object({
  amount: z
    .number()
    .positive("Amount must be positive")
    .min(1, "Amount is required"),
  description: z.string().optional(),
  paymentMethod: z.enum(["CARD", "BANK"]),
});

export default function AddMoney() {
  const [addMoney, { isLoading }] = useAddMoneyMutation();

  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      amount: 0,
      description: "",
      paymentMethod: "CARD",
    },
  });

  const onSubmit = async (data: z.infer<typeof paymentSchema>) => {
    const formData = {
      amount: data.amount,
      description: data.description,
      paymentMethod: data.paymentMethod,
    };

    try {
      await addMoney(formData);
      toast.success("Money Added Successfully");

      form.reset();
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <FormField
                control={form.control}
                name='amount'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount (BDT)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter your amount'
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(value === "" ? "" : Number(value));
                        }}
                        type='number'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Write a note (optional)'
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='paymentMethod'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <FormControl>
                      <RadioGroup
                        value={field.value ?? "CARD"}
                        onValueChange={field.onChange}
                      >
                        <div className='flex items-center space-x-2 rounded-lg border border-border p-3 hover:border-primary'>
                          <RadioGroupItem value='CARD' id='card' />
                          <Label
                            htmlFor='card'
                            className='flex-1 cursor-pointer'
                          >
                            <div className='font-medium'>Debit/Credit Card</div>
                            <div className='text-xs text-muted-foreground'>
                              Instant transfer
                            </div>
                          </Label>
                        </div>
                        <div className='flex items-center space-x-2 rounded-lg border border-border p-3 hover:border-primary'>
                          <RadioGroupItem value='BANK' id='bank' />
                          <Label
                            htmlFor='bank'
                            className='flex-1 cursor-pointer'
                          >
                            <div className='font-medium'>Bank Transfer</div>
                            <div className='text-xs text-muted-foreground'>
                              1-3 business days
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
