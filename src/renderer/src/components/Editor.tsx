import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'
import useSave from '@renderer/hooks/useSave'
import { useAppSelector } from '@renderer/hooks/useStore'
import { RootState } from '@renderer/store'

export const Editor = () => {
  const { editorRef, handleSaveOnBlur, handleAutoSave } = useSave()
  const notes = useAppSelector((state: RootState) => state.notes.notes)
  const currentlyActive = useAppSelector((state: RootState) => state.notes.currentlyActive)

  const note = notes[currentlyActive]

  if (!note) return null

  console.log(note.content)

  return (
    <MDXEditor
      key={note.title}
      ref={editorRef}
      onChange={handleAutoSave}
      onBlur={handleSaveOnBlur}
      markdown={note.content}
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-4 caret-white prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
    />
  )
}
