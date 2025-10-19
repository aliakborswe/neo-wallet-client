import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { Label } from "@/components/ui/label";

const formSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        error: "Name is too short",
      })
      .max(50),
    phone: z.string().min(10, { error: "Phone is too short" }),
    email: z.email(),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters long." })
      .regex(/^(?=.*[A-Z])/, {
        message: "Password must contain at least 1 uppercase letter.",
      })
      .regex(/^(?=.*[!@#$%^&*])/, {
        message: "Password must contain at least 1 special character.",
      })
      .regex(/^(?=.*\d)/, {
        message: "Password must contain at least 1 number.",
      }),
    confirmPassword: z
      .string()
      .min(8, { error: "Confirm Password is not matched" }),
    role: z.enum(["USER", "AGENT"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [register] = useRegisterMutation();

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: "USER",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      role: data.role,
    };
    try {
      await register(userInfo).unwrap();
      toast.success("Registration successful! Please log in.");
      form.reset();
      navigate("/login");
    } catch (error) {
      toast.error("Failed to register. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-background p-4'>
      <div className='w-full max-w-md'>
        <div className='mb-8 text-center'>
          <Link to='/' className='inline-flex items-center gap-2'>
            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary'>
              <span className='text-xl font-bold text-primary-foreground'>
                N
              </span>
            </div>
            <span className='text-2xl font-bold'>Neo Wallet</span>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>Create Account</CardTitle>
            <CardDescription>
              Join thousands of users managing their finances with Neo Wallet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'
              >
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder='John Doe' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='john@example.com'
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
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='+88016321950xx'
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
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className='relative'>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder='Enter your password'
                            {...field}
                            value={field.value || ""}
                          />
                          <button
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground'
                          >
                            {showPassword ? (
                              <EyeOff className='h-4 w-4' />
                            ) : (
                              <Eye className='h-4 w-4' />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='confirmPassword'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className='relative'>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder='Enter your password'
                            {...field}
                            value={field.value || ""}
                          />
                          <button
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground'
                          >
                            {showPassword ? (
                              <EyeOff className='h-4 w-4' />
                            ) : (
                              <Eye className='h-4 w-4' />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='role'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Type</FormLabel>
                      <FormControl>
                        <RadioGroup
                          value={field.value ?? "USER"}
                          onValueChange={field.onChange}
                          className='flex gap-4 justify-between'
                        >
                          <div className='flex items-center space-x-2 rounded-lg border border-border p-3 hover:border-primary'>
                            <RadioGroupItem value='USER' id='user' />
                            <Label
                              htmlFor='user'
                              className='flex-1 cursor-pointer'
                            >
                              <div className='font-medium'>
                                Personal Account
                              </div>
                            </Label>
                          </div>
                          <div className='flex items-center space-x-2 rounded-lg border border-border p-3 hover:border-primary'>
                            <RadioGroupItem value='AGENT' id='agent' />
                            <Label
                              htmlFor='agent'
                              className='flex-1 cursor-pointer'
                            >
                              <div className='font-medium'>Agent Account</div>
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type='submit' className='w-full cursor-pointer'>
                  Sign Up
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className='flex flex-col gap-4'>
            <div className='text-center text-sm text-muted-foreground'>
              Already have an account?{" "}
              <Link
                to='/login'
                className='font-medium text-primary hover:underline'
              >
                Sign in
              </Link>
            </div>
            <div className='text-center text-sm text-muted-foreground'>
              <Link to='/' className='hover:underline'>
                Back to home
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
