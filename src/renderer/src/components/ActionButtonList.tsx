import { FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Button } from '@components'
import { useAppDispatch, useAppSelector } from '@renderer/hooks/useStore'
import { addNote, deleteNote } from '@renderer/store/notesSlice'
import { RootState } from '@renderer/store'

export const ActionButtonList = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const notes = useAppSelector((state: RootState) => state.notes.notes)
  const currentlyActive = useAppSelector((state: RootState) => state.notes.currentlyActive)

  const handleAddNote = async () => {
    const noteTitle = await window.context.createNote()

    if (!noteTitle) return

    dispatch(addNote(noteTitle))
  }

  const handleDeleteNote = async () => {
    const noteTitle = notes[currentlyActive].title
    const succesfulyDeletedFile = await window.context.deleteNote(noteTitle)
    if (succesfulyDeletedFile) dispatch(deleteNote(noteTitle))
  }

  return (
    <ul className="flex justify-between gap-x-2">
      <li>
        <Button aria-label="Create note" className="text-lg" onClick={handleAddNote}>
          <FaPlus />
        </Button>
      </li>
      <li>
        <Button aria-label="Delete note" className="text-lg" onClick={handleDeleteNote}>
          <FaRegTrashAlt />
        </Button>
      </li>
    </ul>
  )
}
