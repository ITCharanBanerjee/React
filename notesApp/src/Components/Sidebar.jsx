import { FILTERS } from '../noteConstants'

const Sidebar = ({ filter, notes, onFilterChange }) => {
  const savedCount = notes.filter((note) => note.pinned).length

  return (
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark">n</span><span>notely</span></div>
      <div className="sidebar-intro"><span className="eyebrow">PERSONAL SPACE</span><h1>Thoughts,<br /><em>kept close.</em></h1></div>
      <nav className="nav-list" aria-label="Note filters">
        <button className={filter === FILTERS.ALL ? 'btn btn-ghost nav-item active' : 'btn btn-ghost nav-item'} onClick={() => onFilterChange(FILTERS.ALL)}><span>All notes</span><b>{notes.length}</b></button>
        <button className={filter === FILTERS.PINNED ? 'btn btn-ghost nav-item active' : 'btn btn-ghost nav-item'} onClick={() => onFilterChange(FILTERS.PINNED)}><span>Saved notes</span><b>{savedCount}</b></button>
      </nav>
      <div className="sidebar-foot"><span className="status-dot" />Local and private<br /><small>Your notes stay in this tab.</small></div>
    </aside>
  )
}

export default Sidebar
