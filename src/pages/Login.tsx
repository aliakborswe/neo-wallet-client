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
import { Link } from "react-router";
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

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(8, { error: "Password is too short" }),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    toast.success("Login successful!");
    console.log(data);
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
            <CardTitle className='text-2xl'>Welcome Back</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
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

                <Button type='submit' className='w-full'>
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className='flex flex-col gap-4'>
            <div className='text-center text-sm text-muted-foreground'>
              Don't have an account?{" "}
              <Link
                to='/register'
                className='font-medium text-primary hover:underline'
              >
                Sign up
              </Link>
            </div>
            <div className='text-center text-sm text-muted-foreground'>
              <Link to='/' className='hover:underline'>
                Back to home
              </Link>
            </div>
          </CardFooter>
        </Card>

        {/* Demo Credentials */}
        <Card className='mt-4 border-accent/50 bg-accent/5'>
          <CardHeader>
            <CardTitle className='text-sm'>Demo Credentials</CardTitle>
          </CardHeader>
          <CardContent className='space-y-2 text-xs text-muted-foreground'>
            <div>
              <strong>User:</strong> user@example.com / password123
            </div>
            <div>
              <strong>Agent:</strong> agent@example.com / password123
            </div>
            <div>
              <strong>Admin:</strong> admin@example.com / password123
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
