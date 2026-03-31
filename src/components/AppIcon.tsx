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

export function AppleMailSVG() {
  return (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mailBg" x1="36" y1="0" x2="36" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#62ABFC" />
          <stop offset="100%" stopColor="#0C73F2" />
        </linearGradient>
      </defs>
      <rect width="72" height="72" rx="16" fill="url(#mailBg)" />
      {/* envelope body */}
      <rect x="9" y="21" width="54" height="37" rx="3" fill="white" />
      {/* top flap V */}
      <path d="M9 21 L36 43 L63 21" fill="none" stroke="#0C73F2" strokeWidth="2.5" strokeLinejoin="round" />
      {/* bottom-left fold */}
      <path d="M9 58 L30 39" stroke="#0C73F2" strokeWidth="1.5" strokeOpacity="0.3" />
      {/* bottom-right fold */}
      <path d="M63 58 L42 39" stroke="#0C73F2" strokeWidth="1.5" strokeOpacity="0.3" />
    </svg>
  )
}
