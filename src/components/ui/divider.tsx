// AlignUI Divider component
import * as React from 'react';
import { cn } from '@/lib/utils';

const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'line' | 'line-spacing';
    orientation?: 'horizontal' | 'vertical';
  }
>(({ className, variant = 'line', orientation = 'horizontal', ...rest }, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'shrink-0',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        variant === 'line' && 'bg-border',
        variant === 'line-spacing' && 'bg-border',
        className,
      )}
      {...rest}
    />
  );
});
Root.displayName = 'Divider';

export { Root };
