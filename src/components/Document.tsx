interface DocumentProps {
  title: string
  onClick: () => void
}

export function Document({ title, onClick }: DocumentProps) {
  return (
    <div className="document-container" onClick={onClick}>
      <div className="document-icon">
        <div className="document-fold" />
        <div className="document-lines">
          <span /><span /><span /><span /><span />
        </div>
      </div>
      <span className="document-name">{title}</span>
    </div>
  )
}
