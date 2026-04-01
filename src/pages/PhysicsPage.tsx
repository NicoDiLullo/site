import { useState } from 'react'
import { Folder } from '../components/Folder'
import { AstroPage } from './AstroPage'

type SubPage = 'astro' | 'hep' | null

interface PhysicsPageProps {
  onBack: () => void
}

export function PhysicsPage({ onBack }: PhysicsPageProps) {
  const [subPage, setSubPage] = useState<SubPage>(null)

  if (subPage === 'astro') {
    return <AstroPage onBack={() => setSubPage(null)} backLabel="Physics" />
  }

  if (subPage === 'hep') {
    return (
      <div className="folder-page">
        <div className="folder-page-header">
          <button className="folder-page-back" onClick={() => setSubPage(null)}>
            ‹ Physics
          </button>
          <span className="folder-page-title">HEP</span>
        </div>
      </div>
    )
  }

  return (
    <div className="folder-page">
      <div className="folder-page-header">
        <button className="folder-page-back" onClick={onBack}>
          ‹ Desktop
        </button>
        <span className="folder-page-title">Physics</span>
      </div>
      <Folder
        name="Astro"
        initialX={50}
        initialY={80}
        onDoubleClick={() => setSubPage('astro')}
      />
      <Folder
        name="HEP"
        initialX={200}
        initialY={80}
        onDoubleClick={() => setSubPage('hep')}
      />
    </div>
  )
}
