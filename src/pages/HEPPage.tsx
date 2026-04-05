import { useState, useCallback, useEffect } from 'react'
import { Folder } from '../components/Folder'
import { Document } from '../components/Document'
import { Window } from '../components/Window'
import { DatasetView } from '../views/DatasetView'
import { datasets, type Dataset } from '../data/datasets'

type SubPage = 'qgjets' | null

interface OpenWindow {
  dataset: Dataset
  initialX: number
  initialY: number
  zIndex: number
}

interface HEPPageProps {
  onBack: () => void
}

export function HEPPage({ onBack }: HEPPageProps) {
  const [subPage, setSubPage] = useState<SubPage>(null)
  const [windows, setWindows] = useState<OpenWindow[]>([])
  const [topZ, setTopZ] = useState(10)

  useEffect(() => {
    const path = subPage === null ? '/physics/hep' : '/physics/hep/qgjets'
    window.goatcounter?.count({ path })
  }, [subPage])

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

  if (subPage === 'qgjets') {
    return (
      <div className="folder-page">
        <div className="folder-page-header">
          <button className="folder-page-back" onClick={() => { setSubPage(null); setWindows([]) }}>
            ‹ HEP
          </button>
          <span className="folder-page-title">QG Jets Datasets</span>
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
          ‹ Physics
        </button>
        <span className="folder-page-title">HEP</span>
      </div>
      <Folder
        name="QG Jets Datasets"
        initialX={50}
        initialY={80}
        onDoubleClick={() => setSubPage('qgjets')}
      />
    </div>
  )
}
