import { createContext, ReactElement, useCallback, useMemo, useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'
type IThemeContext = {
  theme: Theme
}

export const ThemeContext = createContext<IThemeContext>({ theme: 'light' })

type IProps = {
  children: ReactElement
}
const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const theme = useMatchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  )
}

// https://zenn.dev/stin/articles/use-sync-external-store-with-match-media
export const useMatchMedia = (
  mediaQuery: string,
  initialState = false
): boolean => {
  const matchmediaList = useMemo(
    () =>
      typeof window === 'undefined' ? undefined : window.matchMedia(mediaQuery),
    [mediaQuery]
  )

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      matchmediaList?.addEventListener('change', onStoreChange)
      return () => matchmediaList?.removeEventListener('change', onStoreChange)
    },
    [matchmediaList]
  )

  return useSyncExternalStore(
    subscribe,
    () => matchmediaList?.matches ?? initialState,
    () => initialState
  )
}

export default ThemeProvider
