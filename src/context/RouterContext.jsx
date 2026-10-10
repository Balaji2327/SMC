import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
})

export function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname.replace(/\/+$/, '') || '/'
  })

  const navigate = useCallback((to) => {
    if (!to) return
    const cleanTo = to.replace(/\/+$/, '') || '/'
    const currentClean = window.location.pathname.replace(/\/+$/, '') || '/'

    if (cleanTo === currentClean) return

    window.history.pushState({}, '', cleanTo)
    setCurrentPath(cleanTo)
    if (window.scrollY > 0) {
      window.scrollTo(0, 0)
    }
  }, [])

  // Listen to browser Back and Forward button navigation
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname.replace(/\/+$/, '') || '/'
      setCurrentPath(p)
      if (window.scrollY > 0) {
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Intercept internal anchor link clicks to avoid full browser page reloads
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      // Ignore external URLs, protocols, and anchors
      if (
        anchor.target === '_blank' ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.defaultPrevented
      ) {
        return
      }

      // Check if it's an internal route
      if (href.startsWith('/')) {
        e.preventDefault()
        navigate(href)
      }
    }

    document.addEventListener('click', handleGlobalClick)
    return () => document.removeEventListener('click', handleGlobalClick)
  }, [navigate])

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  return useContext(RouterContext)
}
