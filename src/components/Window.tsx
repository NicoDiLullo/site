import { useRef, useCallback } from 'react'

interface WindowProps {
  title: string
  children: React.ReactNode
  onClose: () => void
  initialX?: number
  initialY?: number
  zIndex?: number
  onFocus?: () => void
}

export function Window({
  title,
  children,
  onClose,
  initialX = 150,
  initialY = 120,
  zIndex = 10,
  onFocus,
}: WindowProps) {
  const windowRef = useRef<HTMLDivElement>(null)

  const onTitleBarMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      onFocus?.()
      const el = windowRef.current
      if (!el) return

      const offsetX = e.clientX - el.offsetLeft
      const offsetY = e.clientY - el.offsetTop

      const moveAt = (event: MouseEvent) => {
        el.style.left = `${event.clientX - offsetX}px`
        el.style.top = `${event.clientY - offsetY}px`
      }

      const stopDrag = () => {
        document.removeEventListener('mousemove', moveAt)
        document.removeEventListener('mouseup', stopDrag)
      }

      document.addEventListener('mousemove', moveAt)
      document.addEventListener('mouseup', stopDrag)
    },
    [onFocus]
  )

  return (
    <div
      ref={windowRef}
      className="window"
      style={{ left: initialX, top: initialY, zIndex }}
      onMouseDown={onFocus}
    >
      <div className="window-titlebar" onMouseDown={onTitleBarMouseDown}>
        <div className="window-controls">
          <button className="btn-close" onClick={onClose} title="Close" />
          <button className="btn-minimize" title="Minimize" />
          <button className="btn-maximize" title="Maximize" />
        </div>
        <span className="window-title">{title}</span>
      </div>
      <div className="window-content">{children}</div>
    </div>
  )
}
