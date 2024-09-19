import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/img1.avif"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.jpeg"


function Carousel1() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img className="d-block w-75 h-75 mx-auto"src={img1} alt="First slide"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img className="d-block w-75 h-75 mx-auto"src={img2} alt="First slide"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img className="d-block w-50 h-50 mx-auto"src={img3} alt="First slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;