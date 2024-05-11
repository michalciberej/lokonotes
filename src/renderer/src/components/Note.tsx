import type { NoteType } from '@shared/types'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type NoteProps = Omit<NoteType, 'content'> & ComponentProps<'div'>

export const Note = ({ title, lastUpdate, className, ...props }: NoteProps) => {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-y-2 border hover:bg-neutral-500/30 border-neutral-700/50 p-2 rounded-md transition-colors',
        className
      )}
      {...props}
    >
      <p className="line-clamp-1">{title}</p>
      <p className="line-clamp-1 text-sm">{lastUpdate.toString()}</p>
    </div>
  )
}
