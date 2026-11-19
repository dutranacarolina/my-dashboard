import { createContext, useContext } from 'react'
 
export const MusicContext = createContext(null)
 
export function useMusic() {
  const context = useContext(MusicContext)
  if (!context) {
    throw new Error('useMusic() precisa estar dentro do <MusicProvider>.')
  }
  return context
}