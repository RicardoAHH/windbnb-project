import { useState } from 'react'
import Header from './components/header'
import Container from './components/container.jsx'
import Cards from './components/cards.jsx'
import ModalMobile from './components/ModalMobile.jsx'

function App() {
  const [photos, setPhotos] = useState([]);
  const [isOpen, setIsopen] = useState(false)
  const [filter, setFilter] = useState([])

  const toggleModal = () => {
    setIsopen((prev) => {
      return !prev
    })
  }

  return (
    <>
      <Header
        onClose={toggleModal}
      />
      <Container />
      <Cards
        setPhotos={setPhotos}
        filter={filter}
      />
      <ModalMobile
        onClose={toggleModal}
        isOpen={isOpen}
        photos={photos}
        setFilter={setFilter} />
    </>
  )
}

export default App
