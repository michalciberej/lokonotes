export const Note = ({ note }: { note: { title: string; lastUpdate: string } }): JSX.Element => {
  return (
    <div className="flex flex-col gap-y-2 border border-neutral-700/50 p-2 rounded-md">
      <p>{note.title}</p>
      <p className="line-clamp-1">{note.lastUpdate}</p>
    </div>
  )
}
