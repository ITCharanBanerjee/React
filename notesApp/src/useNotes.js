import { useState } from 'react'
import { EMPTY_NOTE, FILTERS } from './noteConstants'

const matchesFilter = (note, filter) => (
  filter === FILTERS.ALL || (filter === FILTERS.PINNED && note.pinned)
)

export const useNotes = () => {
  const [draft, setDraft] = useState(EMPTY_NOTE)
  const [notes, setNotes] = useState([])
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState(FILTERS.ALL)

  const visibleNotes = notes.filter((note) => {
    const searchableText = `${note.title} ${note.details}`.toLowerCase()
    return matchesFilter(note, filter) && searchableText.includes(query.toLowerCase())
  })

  const updateDraft = (field, value) => {
    setDraft((current) => ({ ...current, [field]: value }))
  }

  const addNote = (event) => {
    event.preventDefault()
    if (!draft.title.trim() || !draft.details.trim()) return

    setNotes((current) => [{
      id: Date.now(),
      title: draft.title.trim(),
      details: draft.details.trim(),
      color: draft.color,
      pinned: false,
    }, ...current])
    setDraft(EMPTY_NOTE)
  }

  const togglePin = (id) => setNotes((current) => current.map((note) => (
    note.id === id ? { ...note, pinned: !note.pinned } : note
  )))

  const deleteNote = (id) => setNotes((current) => current.filter((note) => note.id !== id))

  return {
    draft,
    notes,
    query,
    filter,
    visibleNotes,
    setQuery,
    setFilter,
    updateDraft,
    addNote,
    togglePin,
    deleteNote,
  }
}
