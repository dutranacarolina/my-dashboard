import { useState } from 'react'
import { MusicContext } from './MusicContext.js'
import { musicas as initialmusicas} from '../data/musicas.js'

 
function MusicProvider({ children }) {
  const [musicas, setMusic] = useState(initialmusicas)
 
  function addMusic(newMusic) {
    setMusic([...musicas, newMusic])
  }
 
  const value = { musicas, addMusic }
 
  return <MusicContext value={value}>{children}</MusicContext>
}
 
export default MusicProvider