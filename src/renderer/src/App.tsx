import { Content, RootLayout, Sidebar, NoteList, Editor } from '@components'
import { Provider } from 'react-redux'
import store from './store'

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <RootLayout>
        <Sidebar>
          <NoteList />
        </Sidebar>
        <Content>
          <Editor />
        </Content>
      </RootLayout>
    </Provider>
  )
}

export default App
