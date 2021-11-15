import '../css/modalButton.scss'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ChefModal from './Modal/ChefModal.js'
import LocationModal from './Modal/LocationModal.js'



export function ModalButton() {
  const [chefModalShow, setChefModalShow] = useState(false);
  const [locationModalShow, setLocationModalShow] = useState(false);
  const [activeButton, setActiveButton] = useState({});
  return <div className="buttonContainer">
    <Button variant="danger" onClick={() => {
      setActiveButton("Chef")
      setChefModalShow(true)
    }}>
      Our Chef
    </Button>
    <Button variant="danger" onClick={() => {
      setActiveButton("Location")
      setLocationModalShow(true)
    }}>
      Truck location
    </Button>


    <ChefModal
      show={chefModalShow}
      onHide={() => setChefModalShow(false)}
    />
    <LocationModal
      show={locationModalShow}
      onHide={() => setLocationModalShow(false)}
    />

  </div>
}

export default ModalButton