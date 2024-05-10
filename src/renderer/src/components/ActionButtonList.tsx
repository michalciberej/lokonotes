import { FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Button } from '@components'
import { useStore } from '@renderer/store'

export const ActionButtonList = (): JSX.Element => {
  const addNote = useStore((state) => state.addNote)
  return (
    <ul className="flex justify-between gap-x-2">
      <li>
        <Button aria-label="Create note" className="text-lg" onClick={addNote}>
          <FaPlus />
        </Button>
      </li>
      <li>
        <Button aria-label="Delete note" className="text-lg">
          <FaRegTrashAlt />
        </Button>
      </li>
    </ul>
  )
}
