// ── Update these when you watch something new ────────────────
const MOVIE_TITLE = 'Top Gun'
const MOVIE_YEAR = 1986
const MOVIE_COVER_GRADIENT = 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)'
// ────────────────────────────────────────────────────────────

export function WatchingWidget() {
  return (
    <div className="widget">
      <span className="widget-label">RECENTLY WATCHED</span>
      <div className="widget-body">
        <div
          className="widget-cover widget-cover--wide"
          style={{ background: MOVIE_COVER_GRADIENT }}
        />
        <div className="widget-info">
          <span className="widget-title">{MOVIE_TITLE}</span>
          <span className="widget-subtitle">{MOVIE_YEAR}</span>
        </div>
      </div>
    </div>
  )
}
