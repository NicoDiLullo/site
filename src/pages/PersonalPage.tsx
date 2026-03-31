interface PersonalPageProps {
  onBack: () => void
}

export function PersonalPage({ onBack }: PersonalPageProps) {
  return (
    <div className="folder-page">
      <div className="folder-page-header">
        <button className="folder-page-back" onClick={onBack}>
          ‹ Desktop
        </button>
        <span className="folder-page-title">Personal</span>
      </div>
    </div>
  )
}
