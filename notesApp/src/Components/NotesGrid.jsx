import NoteCard from './NoteCard'

const NotesGrid = ({ notes, query, onTogglePin, onDelete }) => {
  if (notes.length === 0) {
    return <div className="empty-state"><div className="empty-visual"><div className="empty-sheet sheet-back" /><div className="empty-sheet sheet-mid" /><div className="empty-sheet sheet-front"><span>+</span></div></div><div className="eyebrow">{query ? 'NO MATCHES' : 'YOUR BOARD IS READY'}</div><h3>{query ? 'Nothing found' : 'A blank page, for now.'}</h3><p>{query ? 'Try a different search term.' : 'Capture the small things before they become big ideas.'}</p></div>
  }

  return <div className="notes-grid">{notes.map((note, index) => <NoteCard key={note.id} note={note} index={index} onTogglePin={onTogglePin} onDelete={onDelete} />)}</div>
}

export default NotesGrid
