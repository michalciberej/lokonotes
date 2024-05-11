import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Button = ({
  children,
  className,
  ...props
}: ComponentProps<'button'>): JSX.Element => {
  return (
    <button
      className={twMerge(
        'px-2 py-1 border border-neutral-500/50 rounded-md hover:border-neutral-500/90 transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
