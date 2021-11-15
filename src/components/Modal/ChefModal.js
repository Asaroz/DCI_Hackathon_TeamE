import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import chef from '../../imgs/Chef.jpg';


export default function ChefModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="ChefContainer"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Our Chef Billy Giroux
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="chefBody">
            <img src={chef}></img>
            <p>Born and raised in NOLA, Chef Billy Giroux knows what authentic tarditional cajun dishes is all about.
               He created dishes with unexpected twists to turn your seafood classics into masterpiece award winning dishes.
                 Traditional recipes blending with Berlin's urban adventure style in one perfect bite. <br/><br/>
              His culinary adventures around the globe gave him a wide perspective of how food should be.
               Best shared and enjoyed with the people in your Neighborhood.
                He storms the many "Viertel" of Berlin  for some Cajun-vasion with the Gumbo Mambo Food Truck.
                 See you at the next stop!</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="btn btn-danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }