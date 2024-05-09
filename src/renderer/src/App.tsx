import { Content, RootLayout, Sidebar, NoteList } from './components'

const App = (): JSX.Element => {
  return (
    <RootLayout>
      <Sidebar>
        <NoteList />
      </Sidebar>
      <Content />
    </RootLayout>
  )
}

export default App
