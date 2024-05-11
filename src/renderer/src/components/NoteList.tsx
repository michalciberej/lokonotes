import { Note } from '@components'
import { useAppDispatch, useAppSelector } from '@renderer/hooks/useStore'
import { RootState } from '@renderer/store'
import { setCurrentlyActive } from '@renderer/store/notesSlice'

export const NoteList = () => {
  const dispatch = useAppDispatch()
  const notes = useAppSelector((state: RootState) => state.notes.notes)
  const currentlyActive = useAppSelector((state: RootState) => state.notes.currentlyActive)

  if (notes.length === 0) return <div className="text-center">No Notes yet!</div>

  return (
    <ul className="flex flex-col gap-y-4 overflow-auto">
      {notes.map(({ title, lastUpdate }, index) => (
        <li key={title + lastUpdate} onClick={() => dispatch(setCurrentlyActive(index))}>
          <Note
            title={title}
            lastUpdate={lastUpdate}
            className={currentlyActive === index ? `bg-neutral-500/50` : undefined}
          />
        </li>
      ))}
    </ul>
  )
}
