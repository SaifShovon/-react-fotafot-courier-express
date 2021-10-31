import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../../src/slider/1.png';
import slider2 from '../../../../src/slider/2.jpg';
import slider3 from '../../../../src/slider/3.png';
const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                        style={{ height: '600px' }}
                    />
                    <Carousel.Caption>
                        <p className="text-primary">Safly Deliver Your Product</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                        style={{ height: '600px' }}
                    />
                    <Carousel.Caption>
                        <p className="text-primary">Varity of transportation for fastest delivery</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                        style={{ height: '600px' }}
                    />
                    <Carousel.Caption>
                        <p className="text-primary">We Serve All Over the World</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;