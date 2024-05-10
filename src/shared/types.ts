export interface NoteType {
  title: string
  lastUpdate: number
}

export interface NoteWithContent extends NoteType {
  content: string
}

export type CreateNote = () => Promise<NoteType['title'] | null>
export type DeleteNote = (fileName: string) => Promise<true | null>
export type ReadNote = (fileName: string) => Promise<string>
export type WriteNote = (fileName: string, dataToWrite: string) => Promise<void>
export type GetNotes = () => Promise<NoteType[] | null>
