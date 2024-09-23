import React from 'react'
import styles from './styles.module.css'
import './styles/tailwind.css'
import TextGradient from './components/Text/TextGradient'


export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { default as Button } from './components/Button/Button'
export { default as Accordion } from './components/Accordion/Accordion'
export { default as AccordionItem } from './components/Accordion/AccordionItem'
export { default as CardHeading } from './components/Cards/CardHeading'
export { default as CardContent } from './components/Cards/CardContent'
export { default as CardFooter } from './components/Cards/CardFooter'
export { default as CardConatiner } from './components/Cards/CardConatiner'
export { default as DividedCardContainer } from './components/Cards/DividedCardContainer'
export {default as TextGradient} from './components/Text/TextGradient'
export {default as FormInput} from './components/Input/FormInput'
export {default as Form} from './components/Input/Form'
export {default as SearchBar} from './components/Input/Search'

