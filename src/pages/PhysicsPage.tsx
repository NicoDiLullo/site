import { useState, useCallback } from 'react'
import { Folder } from '../components/Folder'
import { Document } from '../components/Document'
import { Window } from '../components/Window'
import { AstroPage } from './AstroPage'
import { DatasetView } from '../views/DatasetView'
import { datasets, type Dataset } from '../data/datasets'

type SubPage = 'astro' | 'hep' | null

interface OpenWindow {
  dataset: Dataset
  initialX: number
  initialY: number
  zIndex: number
}

interface PhysicsPageProps {
  onBack: () => void
}

export function PhysicsPage({ onBack }: PhysicsPageProps) {
  const [subPage, setSubPage] = useState<SubPage>(null)
  const [windows, setWindows] = useState<OpenWindow[]>([])
  const [topZ, setTopZ] = useState(10)

  const openDataset = useCallback(
    (dataset: Dataset) => {
      setWindows(prev => {
        if (prev.find(w => w.dataset.id === dataset.id)) {
          const nextZ = topZ + 1
          setTopZ(nextZ)
          return prev.map(w => w.dataset.id === dataset.id ? { ...w, zIndex: nextZ } : w)
        }
        const offset = prev.length * 30
        const nextZ = topZ + 1
        setTopZ(nextZ)
        return [...prev, { dataset, initialX: 120 + offset, initialY: 100 + offset, zIndex: nextZ }]
      })
    },
    [topZ]
  )

  const closeDataset = useCallback((id: string) => {
    setWindows(prev => prev.filter(w => w.dataset.id !== id))
  }, [])

  const focusDataset = useCallback((id: string) => {
    setTopZ(z => {
      const nextZ = z + 1
      setWindows(prev => prev.map(w => w.dataset.id === id ? { ...w, zIndex: nextZ } : w))
      return nextZ
    })
  }, [])

  if (subPage === 'astro') {
    return <AstroPage onBack={() => setSubPage(null)} backLabel="Physics" />
  }

  if (subPage === 'hep') {
    return (
      <div className="folder-page">
        <div className="folder-page-header">
          <button className="folder-page-back" onClick={() => { setSubPage(null); setWindows([]) }}>
            ‹ Physics
          </button>
          <span className="folder-page-title">HEP</span>
        </div>

        <div className="document-grid">
          {datasets.map(ds => (
            <Document
              key={ds.id}
              title={ds.shortTitle}
              onClick={() => openDataset(ds)}
            />
          ))}
        </div>

        {windows.map(w => (
          <Window
            key={w.dataset.id}
            title={w.dataset.shortTitle}
            onClose={() => closeDataset(w.dataset.id)}
            initialX={w.initialX}
            initialY={w.initialY}
            zIndex={w.zIndex}
            onFocus={() => focusDataset(w.dataset.id)}
          >
            <DatasetView dataset={w.dataset} />
          </Window>
        ))}
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
