import { useState, useCallback } from 'react'
import { Folder } from './components/Folder'
import { Window } from './components/Window'
import { AstroView } from './views/AstroView'
import { SchoolView } from './views/SchoolView'
import { PersonalView } from './views/PersonalView'
import './App.css'

type ViewId = 'astro' | 'school' | 'personal'

interface OpenWindow {
  id: ViewId
  title: string
  initialX: number
  initialY: number
  zIndex: number
}

const VIEW_COMPONENTS: Record<ViewId, React.ComponentType> = {
  astro: AstroView,
  school: SchoolView,
  personal: PersonalView,
}

const FOLDERS: { id: ViewId; name: string; x: number; y: number }[] = [
  { id: 'school', name: 'CS Projects (School)', x: 50, y: 50 },
  { id: 'personal', name: 'Personal', x: 200, y: 50 },
  { id: 'astro', name: 'Astro', x: 350, y: 50 },
]

const WINDOW_TITLES: Record<ViewId, string> = {
  school: 'CS Projects (School)',
  personal: 'Personal',
  astro: 'Astrophysics',
}

export default function App() {
  const [windows, setWindows] = useState<OpenWindow[]>([])
  const [topZ, setTopZ] = useState(10)

  const openWindow = useCallback(
    (id: ViewId) => {
      setWindows(prev => {
        if (prev.find(w => w.id === id)) {
          // Bring existing window to front
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

  const closeWindow = useCallback((id: ViewId) => {
    setWindows(prev => prev.filter(w => w.id !== id))
  }, [])

  const focusWindow = useCallback(
    (id: ViewId) => {
      setTopZ(z => {
        const nextZ = z + 1
        setWindows(prev => prev.map(w => (w.id === id ? { ...w, zIndex: nextZ } : w)))
        return nextZ
      })
    },
    []
  )

  return (
    <div className="desktop">
      {FOLDERS.map(f => (
        <Folder
          key={f.id}
          name={f.name}
          initialX={f.x}
          initialY={f.y}
          onDoubleClick={() => openWindow(f.id)}
        />
      ))}

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
