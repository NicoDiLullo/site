import type { Dataset } from '../data/datasets'

interface DatasetViewProps {
  dataset: Dataset
}

export function DatasetView({ dataset }: DatasetViewProps) {
  return (
    <div className="view-content">
      <h2 className="paper-full-title">{dataset.title}</h2>
      <p className="paper-citation">
        {dataset.authors} · {dataset.date}
      </p>

      <section className="paper-section">
        <h3>Description</h3>
        <p>{dataset.description}</p>
      </section>

      <div className="dataset-footer">
        <span className="dataset-size">{dataset.fileSize}</span>
        <a href={dataset.link} target="_blank" rel="noreferrer" className="dataset-download">
          Download on Zenodo ↗
        </a>
      </div>
    </div>
  )
}
