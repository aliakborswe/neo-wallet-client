import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Spinner } from "@/components/ui/spinner";
import { useProfileQuery } from "@/redux/features/auth/auth.api";
import { useUpdateProfileMutation } from "@/redux/features/user/profile.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";

const updateUserSchema = z.object({
  name: z
    .string()
    .min(3, {
      error: "Name is too short",
    })
    .max(50),
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
});

export default function UpdateProfile() {
  const { data: user, isLoading } = useProfileQuery(undefined);
  const [userUpdate] = useUpdateProfileMutation();

  const navigate = useNavigate();
  const userRole = user?.data?.role;

  // Map user roles to dashboard routes
  const dashboardRoutes: Record<string, string> = {
    ADMIN: "/admin/profile",
    AGENT: "/agent/profile",
    USER: "/user/profile",
  };

  const form = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (user?.data) {
      form.reset({
        name: user.data.name,
        email: user.data.email,
        password: user.data.password || "",
      });
    }
  }, [user, form]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const updateId = toast.loading("Updating...");
    try {
      await userUpdate(userInfo).unwrap();
      toast.success("Update successful!", { id: updateId });
      navigate(dashboardRoutes[userRole] || "/");
    } catch (error: any) {
      toast.error("Updating Failed", { id: updateId });
      console.log(error);
      // if (error.originalStatus === 401) {
      //   navigate("/verify");
      // }
    }
  };
  return (
    <>
      {isLoading ? (
        <div className='flex justify-center py-8'>
          <Spinner />
        </div>
      ) : (
        <Card className='w-full max-w-xl lg:m-12'>
          <CardHeader>
            <CardTitle>Update to your Profile</CardTitle>
            <CardDescription>
              Enter your name, email and password below to update to your
              profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-4'
                id='update-profile-form'
              >
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <input
                          type='text'
                          {...field}
                          className='block w-full border border-gray-300 text-black rounded-md py-1 pl-3 shadow-sm'
                        />
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
                        <input
                          type='email'
                          {...field}
                          className='block w-full border border-gray-300 text-black rounded-md py-1 pl-3 shadow-sm'
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
                        <input
                          type='text'
                          {...field}
                          className='block w-full border border-gray-300 text-black rounded-md py-1 pl-3 shadow-sm'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
          <CardFooter className='flex-col gap-2'>
            <Button form='update-profile-form' type='submit' className='w-full'>
              Save
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
