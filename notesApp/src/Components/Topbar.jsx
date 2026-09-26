import { FILTERS } from '../noteConstants'

const Topbar = ({ filter, noteCount, totalNotes, savedNotes, query, onQueryChange }) => {
  const isPinned = filter === FILTERS.PINNED

  return (
    <header className="topbar">
      <div><span className="eyebrow">{isPinned ? 'SAVED COLLECTION' : 'YOUR COLLECTION'}</span><h2>{isPinned ? 'Saved notes' : 'Recent notes'} <span>{noteCount}</span></h2><div className="topbar-stats"><span><b>{totalNotes}</b> notes</span><span><b>{savedNotes}</b> saved</span><span className="private-pill"><i /> private space</span></div></div>
      <label className="search-box"><span>/</span><input className="input input-bordered" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search your notes..." aria-label="Search your notes" /><kbd>Ctrl K</kbd></label>
    </header>
  )
}

export default Topbar
