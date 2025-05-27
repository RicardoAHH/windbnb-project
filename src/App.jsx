import { useState } from 'react'
import Header from './components/header'
import Container from './components/container.jsx'
import Cards from './components/cards.jsx'
import ModalMobile from './components/ModalMobile.jsx'

function App() {

  const [isOpen, setIsopen] = useState(false)

  const toggleModal = () => {
    setIsopen((prev) => {
      return !prev
    })
  }

  return (
    <>
      <Header
        onClose={toggleModal}
        isOpen={isOpen} />
      <Container />
      <Cards />
      <ModalMobile
        onClose={toggleModal}
        isOpen={isOpen} />
    </>
  )
}

export default App
