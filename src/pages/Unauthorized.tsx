import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import { Link } from "react-router";

export default function Unauthorized() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-background p-4'>
      <div className='text-center'>
        <div className='mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10'>
          <ShieldAlert className='h-10 w-10 text-destructive' />
        </div>
        <h1 className='mb-2 text-4xl font-bold'>Access Denied</h1>
        <p className='mb-8 text-lg text-muted-foreground'>
          You don't have permission to access this page.
        </p>
        <div className='flex gap-4 justify-center'>
          <Button asChild>
            <Link to='/'>Go Home</Link>
          </Button>
          <Button variant='outline' asChild>
            <Link to='/login'>Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
