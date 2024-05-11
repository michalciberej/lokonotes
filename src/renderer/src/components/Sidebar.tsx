import { ActionButtonList } from '@components'

export const Sidebar = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <aside className="hover:w-1/5 w-24 transition-all p-2 bg-neutral-800/90 duration-300 flex flex-col gap-y-2">
      <ActionButtonList />
      {children}
    </aside>
  )
}
