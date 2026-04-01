import { useState } from 'react'
import { Folder } from '../components/Folder'
import { AstroPage } from './AstroPage'
import { HEPPage } from './HEPPage'

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
    return <HEPPage onBack={() => setSubPage(null)} />
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
