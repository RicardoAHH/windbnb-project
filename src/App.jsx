import { useState } from 'react'
import Header from './components/header'
import Container from './components/container.jsx'
import Cards from './components/cards.jsx'
import ModalMobile from './components/ModalMobile.jsx'

function App() {
  const [photos, setPhotos] = useState([]);
  const [isOpen, setIsopen] = useState(false)
  const [filter, setFilter] = useState([])
  const [location, setLocation] = useState("")
  const [numStays, setNumStays] = useState(0)

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
      <Container
        location={location}
        numStays={numStays}
      />
      <Cards
        setPhotos={setPhotos}
        filter={filter}
        photos={photos}
        setFilter={setFilter}
        setNumStays={setNumStays}
      />
      <ModalMobile
        onClose={toggleModal}
        isOpen={isOpen}
        photos={photos}
        setFilter={setFilter}
        location={location}
        setLocation={setLocation}
      />
    </>
  )
}

export default App
