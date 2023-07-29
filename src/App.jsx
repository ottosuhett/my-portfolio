import { useState } from 'react'
import "./reset.css"
import styles from './App.module.scss'
import RootPage from "./pages/Index/index"
function App() {
  return (
    <div className={styles.appContainer}>
      <RootPage />
    </div>
  )
}

export default App
