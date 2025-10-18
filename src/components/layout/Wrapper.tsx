import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
}

const Wrapper = ({children, className}: Props) => {
  return (
    <div className={cn(`container mx-auto px-4`, className)}>
      {children}
    </div>
  );
}

export default Wrapper