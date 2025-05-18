import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
}

export function Section({
  className,
  as: Component = 'section',
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn('py-16 sm:py-20 md:py-24 lg:py-32', className)}
      {...props}
    >
      {children}
    </Component>
  );
}