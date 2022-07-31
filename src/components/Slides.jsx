import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import wedding_image from './../img/wedding.jpg'
import flower_image from './../img/flowers.jpg'
import siblings_image from './../img/siblings.jpg'

export default function Slides() {
  return (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={wedding_image}
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
            src={flower_image}
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
            src={siblings_image}
            alt="Third slide"
            height="100%"
            />

            <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}
