import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import NumberCounter from 'number-counter';
import Particles from "react-tsparticles";

const Grid = () => {
  return (
    <>
    
    {/* <Particles  style={{ position: "absolute", width: "100%", height: "100%;"}}
          width="1423"
          height="881"
      // id="tsparticles"
      // init={particlesInit}
      // loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: false,
          },
          modes: {
       
            bubble: {
              distance: 600,
              duration: 2,
              opacity: 0.3,
              size: 100,
            },
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 900,
            },
            value: 50,
          },
          opacity: {
            value: 0.3,
            anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0,
          sync: false
        }

          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 10,
            
          },
        },
        detectRetina: true,
      }}
    /> */}
      <Container id="Stats" style={{backgroundColor:"black",zIndex:"20"}}>
  
        <Row style={{ paddingTop:"150px"}}>
          <Col md={6}>
            <div
              style={{
                display: "flex",
                webkitBoxAlign: " center",
                alignItems: "center",
              }}
            >
              <div class="sc-kJJesS bQzDjt animation-complete">
                <h1 class="sc-ksPmiX bVyPsl">
                  <span class="sc-cBYbHS bCBsIU">400M+</span> Unique
                  Possibilities with over{" "}
                  <span class="sc-cBYbHS bCBsIU">250+</span> Traits
                </h1>
              </div>
            </div>
          </Col>
 
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-3" style={{textAlign:"center"}}>
                  <div
                    class="animated fadeInRight"
                     style={{opacity: "1", height: "auto;"}}
                  >
                    <div class="sc-kpXqgB irdEaF" style={{marginBottom:" 100px;"}}>
                      <div class="sc-dyUqrC gTsSOh counter">
                        <span class="value">          <NumberCounter end={2} delay={2} className="increment"/>
                       </span>
                        <span class="sc-gTKrkG hzZGnW symbol">+</span>
                        <div>
                          <span class="sc-jwzHer cGuuNR text">Genders</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3"  style={{textAlign:"center"}}>
                  <div
                    class="animated fadeInLeft"
                    style={{opacity: 1, height: "auto;"}}
                  >
                    <div class="sc-kpXqgB irdEaF">
                      <div class="sc-hWgmdx dwXWNA counter">
                        <span class="value">          <NumberCounter end={4} delay={1} className="increment" /></span>
                        <span class="sc-bYAVqI hmmFME symbol">+</span>
                        <div>
                          <span class="sc-fIUAFO iQdDZX text">
                            Body types
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3"  style={{textAlign:"center"}}>
                  <div
                    class="animated fadeInLeft"
                    style={{opacity: "1", height: "auto;"}}
                  >
                    <div class="sc-kpXqgB irdEaF">
                      <div class="sc-eiBfEU hdjESN counter">
                        <span class="value">  <NumberCounter end={2} delay={1} className="increment" /></span>
                        <span class="sc-rehTH dsYiQP symbol">+</span>
                        <div>
                          <span class="sc-kggwrJ bZowA-d text">
                            Factions
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3"  style={{textAlign:"center"}}>
                  <div
                    class="animated fadeInLeft"
                    style={{opacity: "1", height: "auto;"}}
                  >
                    <div class="sc-kpXqgB irdEaF">
                      <div class="sc-eiBfEU hdjESN counter">
                        <span class="value">  <NumberCounter end={8} delay={1} className="increment" /></span>
                        <span class="sc-rehTH dsYiQP symbol">+</span>
                        <div>
                          <span class="sc-kggwrJ bZowA-d text">
                          Skins
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3"  style={{textAlign:"center"}}>
                  <div
                    class="animated fadeInLeft"
                    style={{opacity: "1", height: "auto;"}}
                  >
                    <div class="sc-kpXqgB irdEaF">
                      <div class="sc-eiBfEU hdjESN counter">
                        <span class="value">  <NumberCounter end={30} delay={1} className="increment" /></span>
                        <span class="sc-rehTH dsYiQP symbol">+</span>
                        <div>
                          <span class="sc-kggwrJ bZowA-d text">
                          Hair Types
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3"  style={{textAlign:"center"}}>
                  <div
                    class="animated fadeInLeft"
                    style={{opacity: "1", height: "auto;"}}
                  >
                    <div class="sc-kpXqgB irdEaF">
                      <div class="sc-eiBfEU hdjESN counter">
                        <span class="value">  <NumberCounter end={60} delay={1} className="increment" /></span>
                        <span class="sc-rehTH dsYiQP symbol">+</span>
                        <div>
                          <span class="sc-kggwrJ bZowA-d text">
                  Headwear
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3"  style={{textAlign:"center"}}>
                  <div
                    class="animated fadeInLeft"
                    style={{opacity: "1", height: "auto;"}}
                  >
                    <div class="sc-kpXqgB irdEaF">
                      <div class="sc-eiBfEU hdjESN counter">
                        <span class="value">  <NumberCounter end={50} delay={1} className="increment" /></span>
                        <span class="sc-rehTH dsYiQP symbol">+</span>
                        <div>
                          <span class="sc-kggwrJ bZowA-d text">
                          Suits
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3"  style={{textAlign:"center"}}>
                  <div
                    class="animated fadeInLeft"
                    style={{opacity: "1", height: "auto;"}}
                  >
                    <div class="sc-kpXqgB irdEaF">
                      <div class="sc-eiBfEU hdjESN counter">
                        <span class="value">  <NumberCounter end={16} delay={1} className="increment" /></span>
                      
                        <div>
                          <span class="sc-kggwrJ bZowA-d text">
                         Super Powers and more...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
        </Row>
      </Container>
    </>
  );
};

export default Grid;
