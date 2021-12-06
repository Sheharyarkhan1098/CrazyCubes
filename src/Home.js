import React from "react";
import Navabar from "./Navabar";
import "./index.css";
import Typewriter from "typewriter-effect";
import Crousel from "./Crousel";
// import { Wave,Random } from 'react-animated-text';
import { Container } from "react-bootstrap";
import MintCard from "./MintCard";
import Grid from "./Grid";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Faq from "./Faq";
import Footer from "./Footer";
import Particles from "react-tsparticles";
import Whitepaper from "./whitepaper";
import cube1 from "./images/cube1.png"
import cube2 from "./images/cube2.png"
import logo from "./images/logo-wo-back.png"
import BG from "./images/BG2.jpg"


const Home = () => {
  return (
    <>
     <Particles  style={{ position: "absolute", width: "100%", height: "100%;",zIndex:1  }}
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
              opacity: 1,
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
    />
      <div>
        <img src={BG} class="sc-dOFSHK ihsqNI" />
        <img src={cube2} class="sc-jMljuz ksoXNI" style={{animation: "5s ease 0s infinite normal none running pulse;"}} />
        <img src={cube1} class="sc-dYZB cOSMNH" />
        <Navabar />
        <div className="upr" style={{backgroundColor:"black"}}>
          <div className="container">
            <div className="fihtZS">
           
           <div>
             <img src={logo} className="logo" />
           </div>
              <br />
              <h2 className="headgarage">CRAZY CUBES</h2>
              
              <br />
              <span style={{ color: "white" }} className="KYgEB">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1500)

                      .typeString(
                        '<span style="color:white;">Some cubes lost in forest....</span>'
                      )
                      .deleteAll()
                      .typeString(
                        '<span style="color:white;">Help Cubes to find way back to home.....</span>'
                      )
                      .deleteAll() 
                      .typeString(
                        '<span style="color:white;">Across multiple obstacles...</span>'
                      )
                      .deleteAll() 
                      .typeString(
                        '<span style="color:white;">Help them to catch the shape....</span>'
                      )
                      .deleteAll()
                      .typeString(
                        '<span style="color:white;">Beat all barriers</span>'
                      )
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
              <br/>
         
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:"black"}}>
   <div className="mx-auto" style={{width: "80%"}}>
   <Crousel/>
   </div></div>
 
 
   <Container style={{backgroundColor:"black"}}s>
 <h2 id="Mint" className="minth" style={{}} >MINT<span style={{ color: "rgb(38, 19, 64)"}}> YOURSELF</span></h2>
   

<div style={{
      transform:" perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
}}>
   <Container className="jxZEbo" style={{ 
         boxShadow: "rgb(38 19 64) 0px 0px 15px",
    marginBottom: "20px",
    textAlign: "center",
    padding: "40px 20px",
    borderRadius: "20px",
    transition: "all 0.2s ease 0s;"
   
    }}>
       <MintCard/>
   </Container>
</div></Container>




   <Grid />


  <Roadmap/>

  <Team />
  <Faq/>
  {/* <Whitepaper /> */}
  <Footer/>
    </>
  );
};

export default Home;
