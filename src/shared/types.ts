export interface NoteType {
  title: string
  lastUpdate: Date
  content: string
}
export type NoteContentType = string

export type CreateNote = () => Promise<NoteType['title'] | null>
export type DeleteNote = (fileName: NoteType['title']) => Promise<true | null>
export type ReadNote = (fileName: NoteType['title']) => Promise<NoteContentType>
export type WriteNote = (fileName: NoteType['title'], dataToWrite: string) => Promise<void>
export type GetNotes = () => Promise<NoteType[] | null>
