

import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
  return (
    <Carousel data-bs-theme="dark" className='cars'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://qne.com.pk/cdn/shop/files/LBP-1920x700_2_1800x.png?v=1701428471'          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://qne.com.pk/cdn/shop/files/Web_Slider_Shan_4ef5df72-1254-4c57-8a44-ab015125910d_1800x.png?v=1697806814'          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://qne.com.pk/cdn/shop/files/Webslider_pepsi_1_1800x.png?v=1700827806'          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;