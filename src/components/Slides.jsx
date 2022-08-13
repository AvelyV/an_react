import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import mask_image from './../img/mask.JPG'
import swamp_image from './../img/soo.JPG'
import baby_image from './../img/baby.JPG'
import forest_image from './../img/forest.JPG'

export default function Slides() {
  return (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={forest_image}
            alt="First slide"
            height="100%"
            />
            <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={swamp_image}
            alt="Second slide"
            height="100%"
            />

            <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={baby_image}
            alt="Third slide"
            height="100%"
            />

            <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
            <img
            className="d-block w-100"
            src={mask_image}
            alt="First slide"
            height="100%"
            />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}
