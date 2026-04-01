// ── Update these when you change books ──────────────────────
const BOOK_TITLE = 'The Story of a New Name'
const BOOK_AUTHOR = 'Elena Ferrante'
const BOOK_PAGE = 117
const BOOK_TOTAL_PAGES = 471
const BOOK_COVER_GRADIENT = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
// ────────────────────────────────────────────────────────────

const pct = Math.round((BOOK_PAGE / BOOK_TOTAL_PAGES) * 100)

export function ReadingWidget() {
  return (
    <div className="widget">
      <span className="widget-label">CURRENTLY READING</span>
      <div className="widget-body">
        <div
          className="widget-cover"
          style={{ background: BOOK_COVER_GRADIENT }}
        />
        <div className="widget-info">
          <span className="widget-title">{BOOK_TITLE}</span>
          <span className="widget-subtitle">{BOOK_AUTHOR}</span>
          <div className="widget-progress-track">
            <div className="widget-progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="widget-progress-label">
            {pct}% · p. {BOOK_PAGE} of {BOOK_TOTAL_PAGES}
          </span>
        </div>
      </div>
    </div>
  )
}
