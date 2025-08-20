import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.css'
// import { PokemonList } from './pages/PokemonList/PokemonList.tsx'
import { QueryClient, QueryClientProvider} from "@tanstack/react-query"

import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect
} from '@tanstack/react-router'
import { PokemonList } from './pages/PokemonList/PokemonList'
import { PokemonDetails } from './pages/PokemonDetails/PokemonDetails'

const pokemonRoute = createRootRoute({
  component: () => <Outlet />,
})

const pokemonListRoute = createRoute({
  getParentRoute: () => pokemonRoute,
  path: '/',
  component: PokemonList,
})

const pokemonDetailRoute = createRoute({
  getParentRoute: () => pokemonRoute,
  path: '/details',
  component: PokemonDetails,
})

const routePokemonTree = pokemonRoute.addChildren([
  pokemonListRoute,
  pokemonDetailRoute,
]);

const routerPokemon = createRouter({ routeTree: routePokemonTree });

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <>
        <RouterProvider router={routerPokemon} />
      </> 
    </QueryClientProvider>
  </StrictMode>,
)
