import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { NoteType } from '@shared/types'

export const getNotes = createAsyncThunk('notes/getNotes', () => {
  return window.context.getNotes()
})

const initialState = {
  notes: [] as NoteType[],
  currentlyActive: 0,
  loading: false,
  error: null as string | null
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const newNote: NoteType = {
        title: action.payload,
        lastUpdate: new Date(),
        content: `# Hello from ${action.payload}`
      }
      state.notes = [newNote, ...state.notes]
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.title !== action.payload)
      state.currentlyActive = 0
    },
    setCurrentlyActive: (state, action) => {
      state.currentlyActive = action.payload
    },
    saveNote: (state, action) => {
      state.notes = state.notes.map((note) => {
        if (note.title === action.payload.title) {
          return { ...action.payload, lastUpdate: new Date() }
        }
        return note
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getNotes.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getNotes.rejected, (state, action) => {
      state.loading = false
      state.notes = []
      state.error = action.error.message || 'Something went wrong'
    })

    builder.addCase(getNotes.fulfilled, (state, action) => {
      state.loading = false
      state.notes = action.payload as NoteType[]
      state.error = null
    })
  }
})

export const { addNote, deleteNote, setCurrentlyActive, saveNote } = notesSlice.actions
export default notesSlice.reducer
