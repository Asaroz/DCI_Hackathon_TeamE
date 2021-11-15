import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import map from '../../imgs/berlin.PNG';
import car from '../../imgs/FOOD TRUCK - Gumbo Mambo - PNG for movement.png'
import { useEffect } from 'react';


export default function ChefModal(props) {
    useEffect(()=>{
        
    var classes = ["oneC", "twoC", "threeC","fourC","fiveC","sixC"]; //list of your classes
    var elms = {};
    var n = {}, nclasses = classes.length;
    function changeColor(classname, color) {
        
        var curN = n[classname];
        for (var i = 0; i < curN; i++) {
            
            elms[classname][i].style.backgroundColor = color;
        }
    }
    for (var k = 0; k < nclasses; k++) {
        var curClass = classes[k];
        elms[curClass] = document.getElementsByClassName(curClass);
        n[curClass] = elms[curClass].length;
        var curN = n[curClass];
        for (var i = 0; i < curN; i++) {
            elms[curClass][i].onmouseover = function (e) {
                let save 
                if(e.target.classList.length>1){
                    save = e.target.classList[1]
                } else{
                    save = e.target.classList[0]
                }
                changeColor(save, "rgba(0,255,0,0.4)")
            };
            elms[curClass][i].onmouseout = function (e) {
                let save 
                if(e.target.classList.length>1){
                    save = e.target.classList[1]
                } else{
                    save = e.target.classList[0]
                }
                changeColor(save, "rgba(255,255,255,0)");
                
            };
        }
    };
    return (()=>{

    })
    })





    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="LocationContainer"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Our Current Location
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="LocationBody">
                    <div>
                        <img src={map}></img>
                        <img src={car} className="oneP oneC Pic"></img>
                        <img src={car} className="twoP twoC Pic"></img>
                        <img src={car} className="threeP threeC Pic"></img>
                        <img src={car} className="fourP fourC Pic"></img>
                        <img src={car} className="fiveP fiveC Pic"></img>
                        <img src={car} className="sixP sixC Pic"></img>
                    </div>
                    <table className="locationTable">
                        <tr>
                            <th>Daily from 9-5 PM</th>
                        </tr>
                        <tr>
                            <td className="oneC" >Mondays</td>
                            <td className="oneC">123 A-Viertel</td>
                        </tr>
                        <tr>
                            <td className="twoC">Tuesdays </td>
                            <td className="twoC">456 B-Viertel</td>
                        </tr>
                        <tr>
                            <td className="threeC">Wednesday</td>
                            <td className="threeC">78 C-Viertel</td>
                        </tr>
                        <tr>
                            <td className="fourC">Thursdays</td>
                            <td className="fourC">123 D-Viertel</td>
                        </tr>
                        <tr>
                            <td className="fiveC">Fridays </td>
                            <td className="fiveC">456 E-Viertel</td>
                        </tr>
                        <tr>
                            <td className="sixC">Saturdays</td>
                            <td className="sixC">789 F-Viertel</td>
                        </tr>
                        <tr>
                            <td>Sundays</td>
                            <td>Closed & still cooking!</td>
                        </tr>
                    </table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="btn btn-danger">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}