'use client'
import { Tabs } from './components'
import { ResourcesProvider } from './context/ResourcesProvider'

function RecursosDeApoyo() {
  return (
    <ResourcesProvider>
      <main>
        <Tabs />
      </main>
    </ResourcesProvider>
  )
}

export default RecursosDeApoyo
