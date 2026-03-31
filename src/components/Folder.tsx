import { useRef, useCallback } from 'react'

interface FolderProps {
  name: string
  initialX: number
  initialY: number
  onDoubleClick: () => void
}

export function Folder({ name, initialX, initialY, onDoubleClick }: FolderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dragged = useRef(false)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    dragged.current = false
    const el = containerRef.current
    if (!el) return

    const offsetX = e.clientX - el.offsetLeft
    const offsetY = e.clientY - el.offsetTop

    const moveAt = (event: MouseEvent) => {
      dragged.current = true
      el.style.left = `${event.clientX - offsetX}px`
      el.style.top = `${event.clientY - offsetY}px`
    }

    const stopDrag = () => {
      document.removeEventListener('mousemove', moveAt)
      document.removeEventListener('mouseup', stopDrag)
    }

    document.addEventListener('mousemove', moveAt)
    document.addEventListener('mouseup', stopDrag)
  }, [])

  const handleDoubleClick = useCallback(() => {
    if (!dragged.current) onDoubleClick()
  }, [onDoubleClick])

  return (
    <div
      ref={containerRef}
      className="folder-container"
      style={{ left: initialX, top: initialY }}
      onMouseDown={onMouseDown}
      onDoubleClick={handleDoubleClick}
    >
      <div className="folder-icon" />
      <span className="folder-name">{name}</span>
    </div>
  )
}
