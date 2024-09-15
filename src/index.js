import React from 'react'
import styles from './styles.module.css'
import './styles/tailwind.css'
import { Button } from './components/Button/Button'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { default as Button } from './components/Button/Button'

