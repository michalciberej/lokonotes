export const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="border-l border-neutral-700/70 flex-1 overflow-auto">{children}</div>
}

Content.displayName = 'Content'
