// ── Update these when you change shows ──────────────────────
const SHOW_TITLE = 'The Wire'
const SHOW_SEASON = 2
const SHOW_EPISODE = 5
const SHOW_TOTAL_EPISODES = 10
const SHOW_COVER_GRADIENT = 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)'
// ────────────────────────────────────────────────────────────

const pct = Math.round((SHOW_EPISODE / SHOW_TOTAL_EPISODES) * 100)

export function WatchingWidget() {
  return (
    <div className="widget">
      <span className="widget-label">CURRENTLY WATCHING</span>
      <div className="widget-body">
        <div
          className="widget-cover widget-cover--wide"
          style={{ background: SHOW_COVER_GRADIENT }}
        />
        <div className="widget-info">
          <span className="widget-title">{SHOW_TITLE}</span>
          <span className="widget-subtitle">
            S{SHOW_SEASON} · E{SHOW_EPISODE} of {SHOW_TOTAL_EPISODES}
          </span>
          <div className="widget-progress-track">
            <div className="widget-progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="widget-progress-label">
            {pct}% through season
          </span>
        </div>
      </div>
    </div>
  )
}
