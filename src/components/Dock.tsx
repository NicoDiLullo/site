import { LinkedInSVG, AppleMailSVG } from './AppIcon'

interface DockProps {
  onMailClick: () => void
}

export function Dock({ onMailClick }: DockProps) {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/nicholas-dilullo-3a0436185/', '_blank', 'noreferrer')
  }

  return (
    <div className="dock">
      <button className="dock-item" onClick={openLinkedIn} title="LinkedIn">
        <LinkedInSVG />
      </button>
      <button className="dock-item" onClick={onMailClick} title="Email">
        <AppleMailSVG />
      </button>
    </div>
  )
}
