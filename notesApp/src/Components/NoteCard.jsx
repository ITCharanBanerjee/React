const NoteCard = ({ note, index, onTogglePin, onDelete }) => (
  <article className={`note-card ${note.color}`} style={{ '--delay': `${index * 70}ms` }}>
    <div className="note-tape" />
    <div className="note-meta"><span>{String(index + 1).padStart(2, '0')}</span><button className={`btn btn-ghost btn-sm pin ${note.pinned ? 'pinned' : ''}`} onClick={() => onTogglePin(note.id)} aria-label={note.pinned ? 'Unsave note' : 'Save note'}>{note.pinned ? '★' : '☆'}</button></div>
    <h3>{note.title}</h3>
    <p>{note.details}</p>
    <div className="note-footer"><span>Just now</span><button className="btn btn-ghost btn-xs" onClick={() => onDelete(note.id)}>Delete</button></div>
  </article>
)

export default NoteCard
