'use client'
import { Tabs, PaginationView, ResourcesTopView } from './components'
import { ResourcesProvider } from './context/ResourcesProvider'

function RecursosDeApoyo() {
  return (
    <ResourcesProvider>
      <main>
        <ResourcesTopView />
        <Tabs />
        <PaginationView />
      </main>
    </ResourcesProvider>
  )
}

export default RecursosDeApoyo
