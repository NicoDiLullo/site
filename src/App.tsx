import { useState, useCallback } from 'react'
import { Folder } from './components/Folder'
import { Window } from './components/Window'
import { Dock } from './components/Dock'
import { AstroPage } from './pages/AstroPage'
import { PersonalPage } from './pages/PersonalPage'
import { SchoolView } from './views/SchoolView'
import { EmailView } from './views/EmailView'
import './App.css'

type Page = 'desktop' | 'astro' | 'personal'
type WindowId = 'school'

interface OpenWindow {
  id: WindowId
  title: string
  initialX: number
  initialY: number
  zIndex: number
}

export default function App() {
  const [page, setPage] = useState<Page>('desktop')
  const [windows, setWindows] = useState<OpenWindow[]>([])
  const [topZ, setTopZ] = useState(10)
  const [emailOpen, setEmailOpen] = useState(false)

  const openWindow = useCallback(
    (id: WindowId) => {
      setWindows(prev => {
        if (prev.find(w => w.id === id)) {
          const nextZ = topZ + 1
          setTopZ(nextZ)
          return prev.map(w => (w.id === id ? { ...w, zIndex: nextZ } : w))
        }
        const offset = prev.length * 30
        const nextZ = topZ + 1
        setTopZ(nextZ)
        return [
          ...prev,
          {
            id,
            title: 'CS Projects (School)',
            initialX: 150 + offset,
            initialY: 120 + offset,
            zIndex: nextZ,
          },
        ]
      })
    },
    [topZ]
  )

  const closeWindow = useCallback((id: WindowId) => {
    setWindows(prev => prev.filter(w => w.id !== id))
  }, [])

  const focusWindow = useCallback((id: WindowId) => {
    setTopZ(z => {
      const nextZ = z + 1
      setWindows(prev => prev.map(w => (w.id === id ? { ...w, zIndex: nextZ } : w)))
      return nextZ
    })
  }, [])

  const emailZIndex = topZ + 1

  return (
    <>
      {page === 'astro' && <AstroPage onBack={() => setPage('desktop')} />}
      {page === 'personal' && <PersonalPage onBack={() => setPage('desktop')} />}
      {page === 'desktop' && (
        <div className="desktop">
          <Folder
            name="CS Projects (School)"
            initialX={50}
            initialY={50}
            onDoubleClick={() => openWindow('school')}
          />
          <Folder
            name="Personal"
            initialX={200}
            initialY={50}
            onDoubleClick={() => setPage('personal')}
          />
          <Folder
            name="Physics"
            initialX={350}
            initialY={50}
            onDoubleClick={() => setPage('astro')}
          />

          {windows.map(w => (
            <Window
              key={w.id}
              title="CS Projects (School)"
              onClose={() => closeWindow(w.id)}
              initialX={w.initialX}
              initialY={w.initialY}
              zIndex={w.zIndex}
              onFocus={() => focusWindow(w.id)}
            >
              <SchoolView />
            </Window>
          ))}
        </div>
      )}

      {emailOpen && (
        <Window
          title="Email"
          onClose={() => setEmailOpen(false)}
          initialX={160}
          initialY={140}
          zIndex={emailZIndex}
        >
          <EmailView />
        </Window>
      )}

      <Dock onMailClick={() => setEmailOpen(true)} />
    </>
  )
}
