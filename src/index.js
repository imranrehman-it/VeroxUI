import React from 'react'
import styles from './styles.module.css'
import './styles/tailwind.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { default as Button } from './components/Button/Button'
export { default as Notification } from './components/Notification/Notification'
export { default as Card } from './components/Card/Card'
export { CardContent, CardTitle, CardFooter } from './components/Card/Card'
export { default as RowCard } from './components/RowCard/RowCard'
export { CardRowContent, CardRowTitle, CardRowFooter } from './components/RowCard/RowCard'
