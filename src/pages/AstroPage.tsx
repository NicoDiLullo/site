import { useState, useCallback } from 'react'
import { usePageView } from '../hooks/usePageView'
import { Document } from '../components/Document'
import { Window } from '../components/Window'
import { PaperView } from '../views/PaperView'
import { publications, type Publication } from '../data/publications'

interface OpenWindow {
  pub: Publication
  initialX: number
  initialY: number
  zIndex: number
}

interface AstroPageProps {
  onBack: () => void
  backLabel?: string
}

export function AstroPage({ onBack, backLabel = 'Desktop' }: AstroPageProps) {
  usePageView('/physics/astro')
  const [windows, setWindows] = useState<OpenWindow[]>([])
  const [topZ, setTopZ] = useState(10)

  const openPaper = useCallback(
    (pub: Publication) => {
      setWindows(prev => {
        if (prev.find(w => w.pub.id === pub.id)) {
          const nextZ = topZ + 1
          setTopZ(nextZ)
          return prev.map(w => (w.pub.id === pub.id ? { ...w, zIndex: nextZ } : w))
        }
        const offset = prev.length * 30
        const nextZ = topZ + 1
        setTopZ(nextZ)
        return [
          ...prev,
          { pub, initialX: 120 + offset, initialY: 100 + offset, zIndex: nextZ },
        ]
      })
    },
    [topZ]
  )

  const closePaper = useCallback((id: string) => {
    setWindows(prev => prev.filter(w => w.pub.id !== id))
  }, [])

  const focusPaper = useCallback(
    (id: string) => {
      setTopZ(z => {
        const nextZ = z + 1
        setWindows(prev => prev.map(w => (w.pub.id === id ? { ...w, zIndex: nextZ } : w)))
        return nextZ
      })
    },
    []
  )

  return (
    <div className="folder-page">
      <div className="folder-page-header">
        <button className="folder-page-back" onClick={onBack}>
          ‹ {backLabel}
        </button>
        <span className="folder-page-title">Physics</span>
      </div>

      <div className="document-grid">
        {publications.map(pub => (
          <Document
            key={pub.id}
            title={pub.shortTitle}
            onClick={() => openPaper(pub)}
          />
        ))}
      </div>

      {windows.map(w => (
        <Window
          key={w.pub.id}
          title={w.pub.shortTitle}
          onClose={() => closePaper(w.pub.id)}
          initialX={w.initialX}
          initialY={w.initialY}
          zIndex={w.zIndex}
          onFocus={() => focusPaper(w.pub.id)}
        >
          <PaperView pub={w.pub} />
        </Window>
      ))}
    </div>
  )
}
