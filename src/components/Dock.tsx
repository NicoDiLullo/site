import { LinkedInSVG, AppleMailSVG, GitHubSVG, GoogleScholarSVG } from './AppIcon'

interface DockProps {
  onMailClick: () => void
}

export function Dock({ onMailClick }: DockProps) {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/nicholas-dilullo-3a0436185/', '_blank', 'noreferrer')
  }

  const openGitHub = () => {
    window.open('https://github.com/NicoDiLullo', '_blank', 'noreferrer')
  }

  const openScholar = () => {
    window.open('https://scholar.google.com/citations?user=6i-1K0sAAAAJ&hl=en&oi=ao', '_blank', 'noreferrer')
  }

  return (
    <div className="dock">
      <button className="dock-item" onClick={openLinkedIn} title="LinkedIn">
        <LinkedInSVG />
      </button>
      <button className="dock-item" onClick={openGitHub} title="GitHub">
        <GitHubSVG />
      </button>
      <button className="dock-item" onClick={openScholar} title="Google Scholar">
        <GoogleScholarSVG />
      </button>
      <button className="dock-item" onClick={onMailClick} title="Email">
        <AppleMailSVG />
      </button>
    </div>
  )
}
