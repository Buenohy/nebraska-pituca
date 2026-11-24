import { Button } from '@/components/ui/button';
import React from 'react';

interface ButtonDefaultProps extends React.ComponentProps<typeof Button> {
  text: string;
  children?: React.ReactNode;
}

export function ButtonDefault({
  text,
  children,
  variant = 'default',
  ...props
}: ButtonDefaultProps) {
  return (
    <Button variant={variant} {...props}>
      {text || children}
    </Button>
  );
}
