import { ToastContainer } from 'react-toastify'

import { MainButtons } from './dashboard/components'
import styles from './dashboard/components/MainButtons/styles/MainButtons.module.css'

export const metadata = {
  title: "Red de Cuidados",
    description: "La Red Nacional de Cuidados, reúne a diversas organizaciones públicas y privadas de la sociedad civil a lo largo de todo Chile.",
}

export default function RootLayout({ children }) {
  return (
    <body>
      <main className={styles.container}>
        <MainButtons />
        {children}
        <ToastContainer />
      </main>
    </body>
  )
}
