import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps{
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}


export function Heading({size = 'md', children, asChild}: HeadingProps){
  const Comp = asChild ? Slot : 'span';
  return(
    <Comp className={clsx(
      'text-gray-100 font-sans font-bold',
      {
        'heading-lg': size === 'sm',
        'heading-xl': size === 'md',
        'heading-2xl': size === 'lg',
      }
    )}
    >

      {children}
    </Comp>
  )
}