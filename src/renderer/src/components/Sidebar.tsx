import { Button } from './Button'
import { FaRegTrashAlt, FaPlus } from 'react-icons/fa'

export const Sidebar = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <aside className="hover:w-1/5 w-24 transition-all p-2 bg-neutral-800/90 duration-300 flex flex-col gap-y-4">
      <ul className="flex justify-between gap-x-2">
        <li>
          <Button aria-label="Create note" className="text-lg">
            <FaPlus />
          </Button>
        </li>
        <li>
          <Button aria-label="Delete note" className="text-lg">
            <FaRegTrashAlt />
          </Button>
        </li>
      </ul>
      {children}
    </aside>
  )
}
