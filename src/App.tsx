import { useState, useCallback } from 'react'
import { Folder } from './components/Folder'
import { Window } from './components/Window'
import { AstroPage } from './pages/AstroPage'
import { SchoolView } from './views/SchoolView'
import { PersonalView } from './views/PersonalView'
import './App.css'

type Page = 'desktop' | 'astro'
type WindowId = 'school' | 'personal'

interface OpenWindow {
  id: WindowId
  title: string
  initialX: number
  initialY: number
  zIndex: number
}

const WINDOW_TITLES: Record<WindowId, string> = {
  school: 'CS Projects (School)',
  personal: 'Personal',
}

const VIEW_COMPONENTS: Record<WindowId, React.ComponentType> = {
  school: SchoolView,
  personal: PersonalView,
}

export default function App() {
  const [page, setPage] = useState<Page>('desktop')
  const [windows, setWindows] = useState<OpenWindow[]>([])
  const [topZ, setTopZ] = useState(10)

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
            title: WINDOW_TITLES[id],
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

  if (page === 'astro') {
    return <AstroPage onBack={() => setPage('desktop')} />
  }

  return (
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
        onDoubleClick={() => openWindow('personal')}
      />
      <Folder
        name="Physics"
        initialX={350}
        initialY={50}
        onDoubleClick={() => setPage('astro')}
      />

      {windows.map(w => {
        const ViewComponent = VIEW_COMPONENTS[w.id]
        return (
          <Window
            key={w.id}
            title={w.title}
            onClose={() => closeWindow(w.id)}
            initialX={w.initialX}
            initialY={w.initialY}
            zIndex={w.zIndex}
            onFocus={() => focusWindow(w.id)}
          >
            <ViewComponent />
          </Window>
        )
      })}

      <button className="reload-button" onClick={() => location.reload()}>
        <img src="/reload.png" alt="Reload" />
      </button>
    </div>
  )
}
