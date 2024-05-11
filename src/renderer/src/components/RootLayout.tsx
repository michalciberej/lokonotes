import { useAppDispatch } from '@renderer/hooks/useStore'
import { getNotes } from '@renderer/store/notesSlice'
import { useEffect } from 'react'

export const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  return <main className="flex bg-neutral-900/80 backdrop-blur-3xl h-full">{children}</main>
}
