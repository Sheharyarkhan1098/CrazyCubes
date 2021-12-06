import React from 'react'
import { Card,Button, Container } from 'react-bootstrap'
import Tilt from 'react-tilt';
import gameplay from './images/gameplay.png'

const MintCard = () => {
    return (
        <>
        <br/>
        
<Tilt className="Tilt" options={{ max : 0 ,
     reverse:        false,  // reverse the tilt direction
    max:            15,     // max tilt rotation (degrees)
    perspective:    3500,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:          300,    // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true ,   // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}}  >
      <Container>
          <Card  style={{ margin:"0 auto",border:"none" }}>
  <Card.Img variant="top" src={gameplay} />
  
 
  <Card.Body style={{backgroundColor: "black"}}>
  <div class="ivqYJF"></div>
    <Card.Title className="titl" style={{textAlign:"center",color:"white",color: "rgb(255, 255, 255)",
fontWeight: "400",
fontSize: "22px",

textAlign: "center",
marginTop: "25px",
marginBottom: "25px;"}}>0/10000 Minted</Card.Title>
   <br/>
   <br/>
    <button variant="" className="solbutton mx-auto">Mint</button>
  </Card.Body>
</Card> 
</Container> 
</Tilt>
        </>
    )
}

export default MintCard
