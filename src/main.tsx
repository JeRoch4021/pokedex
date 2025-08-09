import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.css'
import { PokemonList } from './pages/PokemonList/PokemonList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonList />
  </StrictMode>,
)
