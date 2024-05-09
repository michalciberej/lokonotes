export const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <main className="flex bg-neutral-900/80 backdrop-blur-3xl h-full">{children}</main>
}
