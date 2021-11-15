import '../css/home.scss';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ModalButtons from './ModalButtons.js'

import fullLogo from '../imgs/logo_gumbo_mambo_-_logo_website_-_final.png';
import harvesting from '../imgs/Harvest.jpg';
import shrimps from '../imgs/lotsaShrimps.jpg';
import Img1 from "../imgs/Boiled Crawfish.jpg";
import movementTruck from '../imgs/FOOD TRUCK - Gumbo Mambo - PNG for movement.png';
import hero1 from '../imgs/Slides/Hero-Picture 1 - without text.jpg'
import hero2 from '../imgs/Slides/Hero-Picture 2 - without text.jpg'
import hero3 from '../imgs/Slides/Hero-Picture 3 - without text.jpg'
import hero4 from '../imgs/Slides/Hero-Picture 4 - without text.jpg'
import hero5 from '../imgs/Slides/Hero-Picture 5 - without text.jpg'
import hero6 from '../imgs/Slides/Hero-Picture 6 - without text.jpg'
import hero7 from '../imgs/Slides/Hero-Picture 7 - without text.gif'
import hero8 from '../imgs/Slides/Hero-Picture 8 - without text.gif'
import hero9 from '../imgs/Slides/Hero-Picture 9 - without text.gif'



export function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
     
    const images = [
        { img: hero1, text1: "Cajun-vasion in your neighborhood!", text2: "Catch us or Order now" ,class:"head1"},
        { img: hero9, text1: "Spicy", text2: "", class:"head2" },
        { img: hero4, text1: "Holy Cajun Trinity", text2: "Onion + Celery + Green Pepper" , class:"head3"},
        { img: hero7, text1: "Freshly Cooked", text2: "from us to you in minutes" , class:"head4"},
        { img: hero5, text1: "Cajun-vasion", text2: "Visit our truck now!" , class:"head5"},
        { img: hero6, text1: "Order Now", text2: "" },
    ]

    return (
        <div className="carouselContainer">
            <Carousel activeIndex={index} onSelect={handleSelect} >
                {images.map((images) => {
                    return (
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={images.img}
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                <div className={`carouselText ${images.class}`}>
                                    <div>{images.text1}</div>
                                    <p>{images.text2}</p>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>)
                })}
            </Carousel>
            <div className="hoverContainer">
            <div className="headText">
                <div className="headTtitle">CAJUN FOOD WITH A TON OF ZING!</div>
                <div className="headCatchContainer">
                    <div className="headCatch">
                        <div>
                             We bring the authentic taste of New Orleans cuisine to your neighborhood. Our mouth watering Cajun dishes are especially crafted by our lead expert Chef Billy Giroux to satisfy your spicy cravings.
                            <br/>
                            <br/>
                             Our special tangy sauce and carefully blended herbs and spices to give you just that perfect kick is our secret weapon. 9 carefully chosen recipes fit for that Berlin eclectic vibe will surely serve every preference out there. Our Food Truck team is there to bring you closer to that Mardi Gras feel, as you enjoy each and every taste of that delicious meal. Guaranteed, each bite is better than the last!
                            <br />
                            <br />
                            We follow our Farm to Table principle, making sure high quality, fresh  Ingredients make way to our kitchen from locally  sourced sustainable farmers and fishermen
                            <br/>
                            <br/>
                          
                        </div>
                    </div>
                    <div>
                        <img src={hero2} className="img0"></img>
                        <img src={harvesting} className="img1"></img>
                        <img src={shrimps} className="img2"></img>
                    </div>
                </div>
                </div>
            </div>

            <ModalButtons />
        </div>



    )
}
export default Home