import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


const ImageCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item className="carousel-inner">
                <img
                    className="d-block w-100"
                    src="\Assets\images\carousel-img-1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="\Assets\images\carousel-img-2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="text-light bg-dark">Discover recipes. Just add wine.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="\Assets\images\carousel-img-3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Buy a gift</h3>
                    <p>All they want for Christmas is booze.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default ImageCarousel;