import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar'
import NoteComposer from './Components/NoteComposer'
import NotesGrid from './Components/NotesGrid'
import { useNotes } from './useNotes'

const App = () => {
  const notesModel = useNotes()

  return (
    <div className="app-shell">
      <Sidebar filter={notesModel.filter} notes={notesModel.notes} onFilterChange={notesModel.setFilter} />
      <main className="main-content">
        <Topbar filter={notesModel.filter} noteCount={notesModel.visibleNotes.length} totalNotes={notesModel.notes.length} savedNotes={notesModel.notes.filter((note) => note.pinned).length} query={notesModel.query} onQueryChange={notesModel.setQuery} />
        <section className="content-grid">
          <NoteComposer draft={notesModel.draft} onDraftChange={notesModel.updateDraft} onSubmit={notesModel.addNote} />
          <div className="notes-area"><NotesGrid notes={notesModel.visibleNotes} query={notesModel.query} onTogglePin={notesModel.togglePin} onDelete={notesModel.deleteNote} /></div>
        </section>
      </main>
    </div>
  )
}

export default App
