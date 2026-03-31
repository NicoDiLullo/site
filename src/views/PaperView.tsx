import type { Publication } from '../data/publications'

interface PaperViewProps {
  pub: Publication
}

export function PaperView({ pub }: PaperViewProps) {
  return (
    <div className="view-content">
      <p className="paper-citation">{pub.citation}</p>

      <div className="contribution-bubble">
        <span className="contribution-label">My contribution</span>
        <p>{pub.contribution}</p>
      </div>

      <section className="paper-section">
        <h3>Abstract</h3>
        <p>{pub.abstract}</p>
      </section>

      <section className="paper-section">
        <h3>Full Text</h3>
        <p>{pub.fullText}</p>
        {pub.link && (
          <a href={pub.link} target="_blank" rel="noreferrer" className="paper-link">
            View on journal site →
          </a>
        )}
      </section>
    </div>
  )
}
