interface AppIconProps {
  label: string
  onClick: () => void
  children: React.ReactNode
}

export function AppIcon({ label, onClick, children }: AppIconProps) {
  return (
    <div className="app-icon-container" onClick={onClick}>
      <div className="app-icon">{children}</div>
      <span className="app-icon-label">{label}</span>
    </div>
  )
}

export function LinkedInSVG() {
  return (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="72" height="72" rx="14" fill="#0A66C2" />
      <path
        d="M20 28h8v24h-8V28zm4-13a4 4 0 110 8 4 4 0 010-8zM32 28h7.7v3.3h.1c1.1-2 3.7-4.1 7.6-4.1 8.1 0 9.6 5.3 9.6 12.3V52h-8V41.2c0-2.6-.1-5.9-3.6-5.9-3.6 0-4.2 2.8-4.2 5.7V52H32V28z"
        fill="white"
      />
    </svg>
  )
}

export function GmailSVG() {
  return (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="72" height="72" rx="14" fill="white" />
      <path d="M12 22h48v28H12z" fill="white" />
      <path d="M12 22l24 17 24-17" stroke="#EA4335" strokeWidth="2" fill="none" />
      <path d="M12 22v28h10V34l14 10 14-10v16h10V22" fill="white" />
      <path d="M12 22l24 17 24-17H12z" fill="#EA4335" />
      <path d="M12 22v28h10V34l-10-12z" fill="#C5221F" />
      <path d="M60 22v28H50V34l10-12z" fill="#C5221F" />
      <path d="M22 34v16H50V34L36 44 22 34z" fill="#FBBC04" />
      <path d="M12 22l10 12 14 10 14-10 10-12H12z" fill="#EA4335" />
      <path d="M22 34l14 10 14-10V22H22v12z" fill="white" />
    </svg>
  )
}
