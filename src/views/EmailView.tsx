import { useState } from 'react'

const EMAIL = 'nicholas_dilullo@brown.edu'

export function EmailView() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="view-content email-view">
      <div className="email-icon-row">
        <svg width="40" height="40" viewBox="0 0 72 72" fill="none">
          <defs>
            <linearGradient id="mailBg2" x1="36" y1="0" x2="36" y2="72" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#62ABFC" />
              <stop offset="100%" stopColor="#0C73F2" />
            </linearGradient>
          </defs>
          <rect width="72" height="72" rx="16" fill="url(#mailBg2)" />
          <rect x="9" y="21" width="54" height="37" rx="3" fill="white" />
          <path d="M9 21 L36 43 L63 21" fill="none" stroke="#0C73F2" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M9 58 L30 39" stroke="#0C73F2" strokeWidth="1.5" strokeOpacity="0.3" />
          <path d="M63 58 L42 39" stroke="#0C73F2" strokeWidth="1.5" strokeOpacity="0.3" />
        </svg>
        <span className="email-heading">Email</span>
      </div>
      <div className="email-address-row">
        <span className="email-address">{EMAIL}</span>
        <button className="email-copy-btn" onClick={copy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <a className="email-mailto" href={`mailto:${EMAIL}`}>
        Open in mail app →
      </a>
    </div>
  )
}
