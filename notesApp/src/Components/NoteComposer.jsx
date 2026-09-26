import { NOTE_COLORS } from '../noteConstants'

const NoteComposer = ({ draft, onDraftChange, onSubmit }) => {
  const isComplete = draft.title.trim() && draft.details.trim()

  return (
    <form className="composer" onSubmit={onSubmit}>
      <div className="composer-head"><span className="eyebrow">NEW ENTRY</span><span className="spark">+</span></div>
      <h3>What is on<br /><em>your mind?</em></h3>
      <label className="field-label">TITLE<input className="input input-ghost" value={draft.title} onChange={(event) => onDraftChange('title', event.target.value)} placeholder="Give it a name" /></label>
      <label className="field-label">NOTE<textarea className="textarea textarea-ghost" value={draft.details} onChange={(event) => onDraftChange('details', event.target.value)} placeholder="Start writing here..." /></label>
      <div className="composer-bottom"><div className="swatches" aria-label="Note color"><span className="field-label">COLOR</span>{NOTE_COLORS.map((color) => <button type="button" key={color} aria-label={`Use ${color} note`} className={`swatch ${color} ${draft.color === color ? 'selected' : ''}`} onClick={() => onDraftChange('color', color)} />)}</div><button className="btn add-button" disabled={!isComplete}>Add note <span>-&gt;</span></button></div>
    </form>
  )
}

export default NoteComposer
