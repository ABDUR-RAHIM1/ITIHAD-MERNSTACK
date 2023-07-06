import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../image/slider/s1.PNG'
import slider2 from '../../image/slider/s2.PNG'
import slider3 from '../../image/slider/s3.PNG'
import "./Slider.css"
function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderImg"
          src={slider1}
          alt="First slide"
        /> 
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 sliderImg"
          src={slider2}
          alt="First slide"
        />
 
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 sliderImg"
          src={slider3}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;