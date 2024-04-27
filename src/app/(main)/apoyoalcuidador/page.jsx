'use client'
import { ContainerView } from './components'
import { ResourcesProvider } from './context/ResourcesProvider'

function RecursosDeApoyo() {
  return (
    <ResourcesProvider>
      <ContainerView />
    </ResourcesProvider>
  )
}

export default RecursosDeApoyo
