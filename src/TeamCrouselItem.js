import React from 'react'
import {Card} from 'react-bootstrap'
import Tilt from 'react-tilt'

const CarouselItemT = ({imageSrc}) => {
    return (
        <>
        <Tilt className="Tilt" options={{ max : 0 ,
     reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    7500,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:          300,    // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true ,   // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}}  >
        <Card id="Team" style={{ height: '30rem',maxWidth:"90%", margin: "0 auto", border: "0px solid black", borderRadius: "15px" }}>
       
        <Card.Img style={{borderRadius:"15px",height:"600px"}} variant="top" src={imageSrc.img} className="carouselItem-img" />
       <div className="">
        <Card.ImgOverlay className="name teamtop">
            <Card.Title className="cname">{imageSrc.name}</Card.Title>
            <Card.Text className="cdes">
         {   imageSrc.des}
            </Card.Text>
          
        </Card.ImgOverlay>
        </div>
        </Card>
        </Tilt>
        </>
    )
}

export default CarouselItemT
