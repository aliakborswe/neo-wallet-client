import { Link } from "react-router";

export default function Logo({className}: {className?: string}) {
  return (
    <Link to='/' className={`flex items-center gap-2 ${className}`}>
      <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary'>
        <span className='text-lg font-bold text-primary-foreground'>N</span>
      </div>
      <span className='text-xl font-bold'>Neo Wallet</span>
    </Link>
  );
}
  