import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import review1 from '../imgs/reviews/Review 1.png'
import review2 from '../imgs/reviews/Review 2.png'
import review3 from '../imgs/reviews/Review 3.png'
import review4 from '../imgs/reviews/Review 4.png'
import '../css/review.scss'
import video from '../Insta Story.mp4'


export function Reviews(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const images = [
        review1,
        review2,
        review3,
        review4
    ]
    return <div>
        <p className="PP">REVIEWS</p>
        <div className="reviewWrap">
        
        <div className="reviewCarosell">
        <Carousel activeIndex={index} onSelect={handleSelect} >
                {images.map((images) => {
                    return (
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={images}
                                alt="First slide"
                            />
                        </Carousel.Item>)
                })}
            </Carousel>
        </div>
        <video loop autoPlay src={video} type="video/mp4"></video>
    </div>
    </div>
}
    
    

export default Reviews