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

export function GitHubSVG() {
  return (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="72" height="72" rx="16" fill="#1b1f24" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 12a24 24 0 00-7.58 46.77c1.2.22 1.64-.52 1.64-1.16 0-.57-.02-2.08-.03-4.09-6.68 1.45-8.09-3.22-8.09-3.22a6.36 6.36 0 00-2.66-3.51c-2.18-1.49.17-1.46.17-1.46a5.04 5.04 0 013.68 2.47c2.14 3.67 5.62 2.61 6.99 2 .21-1.55.84-2.61 1.52-3.21-5.33-.6-10.93-2.67-10.93-11.87a9.3 9.3 0 012.47-6.44c-.25-.61-1.07-3.04.23-6.34 0 0 2.02-.65 6.6 2.46a22.7 22.7 0 0112.02 0c4.58-3.11 6.59-2.46 6.59-2.46 1.31 3.3.49 5.73.24 6.34a9.28 9.28 0 012.47 6.44c0 9.22-5.61 11.26-10.96 11.85.86.74 1.63 2.21 1.63 4.46 0 3.22-.03 5.81-.03 6.6 0 .64.43 1.39 1.65 1.15A24 24 0 0036 12z"
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
