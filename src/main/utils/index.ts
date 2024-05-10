import { homedir } from 'os'
import path from 'path'
import { dirName, fileEncoding } from '@shared/constants'
import { ensureDir, readdir, readFile, remove, stat, writeFile } from 'fs-extra'
import { dialog } from 'electron'
import type { DeleteNote, ReadNote, CreateNote, GetNotes, WriteNote } from '@shared/types'
import { isEmpty } from 'lodash'

export const getRootDir = (): string => {
  return `${homedir()}/${dirName}`
}

export const createNote: CreateNote = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const { filePath, canceled } = await dialog.showSaveDialog({
    title: 'New Note',
    defaultPath: `${rootDir}/Untitled.mdx`,
    buttonLabel: 'Create',
    properties: ['showOverwriteConfirmation'],
    showsTagField: false,
    filters: [{ name: 'Markdown', extensions: ['mdx'] }]
  })

  if (canceled || !filePath) return null

  const { name, dir } = path.parse(filePath)

  if (dir !== rootDir) {
    dialog.showMessageBox({
      type: 'error',
      title: 'Wrong Directory',
      message: `Notes must be created inside ${rootDir}`
    })
    return null
  }

  await writeFile(filePath, '')

  return name
}

export const deleteNote: DeleteNote = async (fileName) => {
  const rootDir = getRootDir()

  const { response } = await dialog.showMessageBox({
    type: 'warning',
    title: 'Delete Note',
    message: `Really want to delete ${fileName}?`,
    buttons: ['Delete', 'Cancel'],
    defaultId: 1,
    cancelId: 1
  })

  if (response === 1) return null

  await remove(`${rootDir}/${fileName}.mdx`)
  return true
}

export const readNote: ReadNote = async (fileName) => {
  const rootDir = getRootDir()
  return await readFile(`${rootDir}/${fileName}.mdx`, { encoding: fileEncoding })
}

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  console.log(rootDir)

  const notesNames = await readdir(rootDir, { encoding: fileEncoding, withFileTypes: false })

  const notes = notesNames.filter((noteName) => noteName.endsWith('.mdx'))

  if (isEmpty(notes)) return null

  return Promise.all(
    notes.map(async (fileName) => {
      const fileData = await stat(`${rootDir}/${fileName}`)

      return { title: fileName.replace('.mdx', ''), lastUpdate: fileData.mtimeMs }
    })
  )
}

export const writeNote: WriteNote = async (fileName, dataToWrite) => {
  const rootDir = getRootDir()

  return await writeFile(`${rootDir}/${fileName}`, dataToWrite, { encoding: fileEncoding })
}
