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
        ' px-2 py-1 border border-neutral-700/70 rounded-md hover:bg-neutral-900/80 transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
