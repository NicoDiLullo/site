import { useEffect } from 'react'

export function usePageView(path: string) {
  useEffect(() => {
    window.goatcounter?.count({ path })
  }, [])
}
