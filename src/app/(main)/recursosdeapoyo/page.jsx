'use client'
import { Tabs, PaginationView } from './components'
import { ResourcesProvider } from './context/ResourcesProvider'

function RecursosDeApoyo() {
  return (
    <ResourcesProvider>
      <main>
        <Tabs />
        <PaginationView />
      </main>
    </ResourcesProvider>
  )
}

export default RecursosDeApoyo
