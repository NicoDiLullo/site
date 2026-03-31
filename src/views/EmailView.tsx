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
          <rect width="72" height="72" rx="14" fill="white" />
          <path d="M12 22l24 17 24-17H12z" fill="#EA4335" />
          <path d="M12 22v28h10V34l-10-12z" fill="#C5221F" />
          <path d="M60 22v28H50V34l10-12z" fill="#C5221F" />
          <path d="M22 34v16H50V34L36 44 22 34z" fill="#FBBC04" />
          <path d="M12 22l10 12 14 10 14-10 10-12H12z" fill="#EA4335" />
          <path d="M22 34l14 10 14-10V22H22v12z" fill="white" />
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
