import React from 'react'
import {Carousel} from 'react-bootstrap'

function CarouselHome() {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src={require('../assets/loris-oberlander-bg75CRYfgs0-unsplash.jpg').default}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src={require('../assets/ryunosuke-kikuno-gm-7D4kPntw-unsplash.jpg').default}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src={require('../assets/matt-j_cand-qP54ziIya4k-unsplash.jpg').default}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselHome
