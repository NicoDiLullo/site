import { useState, useCallback } from 'react'
import { AppIcon, LinkedInSVG, AppleMailSVG } from '../components/AppIcon'
import { Window } from '../components/Window'
import { EmailView } from '../views/EmailView'

interface PersonalPageProps {
  onBack: () => void
}

export function PersonalPage({ onBack }: PersonalPageProps) {
  const [emailOpen, setEmailOpen] = useState(false)

  const openLinkedIn = useCallback(() => {
    window.open('https://www.linkedin.com/in/nicholas-dilullo-3a0436185/', '_blank', 'noreferrer')
  }, [])

  return (
    <div className="folder-page">
      <div className="folder-page-header">
        <button className="folder-page-back" onClick={onBack}>
          ‹ Desktop
        </button>
        <span className="folder-page-title">Personal</span>
      </div>

      <div className="app-icon-grid">
        <AppIcon label="LinkedIn" onClick={openLinkedIn}>
          <LinkedInSVG />
        </AppIcon>
        <AppIcon label="Email" onClick={() => setEmailOpen(true)}>
          <AppleMailSVG />
        </AppIcon>
      </div>

      {emailOpen && (
        <Window
          title="Email"
          onClose={() => setEmailOpen(false)}
          initialX={160}
          initialY={140}
          zIndex={10}
        >
          <EmailView />
        </Window>
      )}
    </div>
  )
}
