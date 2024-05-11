import { useRef } from 'react'
import { MDXEditorMethods } from '@mdxeditor/editor'
import { useSelector } from 'react-redux'
import { RootState } from '@renderer/store'
import { throttle } from 'lodash'
import store from '@renderer/store'
import { saveNote } from '@renderer/store/notesSlice'

const useSave = () => {
  const editorRef = useRef<MDXEditorMethods>(null)
  const notes = useSelector((state: RootState) => state.notes.notes)
  const currentlyActive = useSelector((state: RootState) => state.notes.currentlyActive)

  const handleAutoSave = throttle(
    async () => {
      const content = editorRef.current?.getMarkdown()
      const selectedNote = notes[currentlyActive]

      await window.context.writeNote(selectedNote.title, content!)

      store.dispatch(saveNote({ ...selectedNote, content }))
    },
    5000,
    { trailing: true }
  )

  const handleSaveOnBlur = async () => {
    handleAutoSave.cancel()

    const content = editorRef.current?.getMarkdown()
    const selectedNote = notes[currentlyActive]

    await window.context.writeNote(selectedNote.title, content!)
    store.dispatch(saveNote({ ...selectedNote, content }))
  }

  return { editorRef, handleSaveOnBlur, handleAutoSave }
}

export default useSave
