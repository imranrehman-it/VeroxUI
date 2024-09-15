import React from 'react'
import styles from './styles.module.css'
import './styles/tailwind.css'


export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { default as Button } from './components/Button/Button'
export { default as Accordion } from './components/Accordion/Accordion'
export { default as AccordionItem } from './components/Accordion/AccordionItem'

