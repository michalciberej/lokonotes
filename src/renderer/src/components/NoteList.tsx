import { Note } from './Note'

const notes = [
  { title: 'Note 1', lastUpdate: '01/02/1992' },
  { title: 'Note 2', lastUpdate: '01/02/1992' }
]

export const NoteList = (): JSX.Element => {
  return (
    <ul className="flex flex-col gap-y-4 overflow-auto">
      {notes.map((note) => (
        <li key={note.title + note.lastUpdate}>
          <Note note={note} />
        </li>
      ))}
    </ul>
  )
}
