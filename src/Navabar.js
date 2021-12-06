import React,{useEffect,useState,useCallback} from "react";
import './App.js'
import {Container,Navbar,Nav} from 'react-bootstrap'

const Navabar = () => {
  const [y, setY] = useState(window.scrollY);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isClass, setIsclass] = useState("");

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if(window.scrollY  <= 50){
        setIsTransparent(true)
      }else if (isTransparent && y < window.scrollY) {
          setIsTransparent(false)
        }
      setY(window.scrollY);
    }, [y]
  );
  
useEffect(() => {
  window.addEventListener("scroll", (e) => handleNavigation(e));

  return () => { // return a cleanup function to unregister our function since its gonna run multiple times
    window.removeEventListener("scroll", (e) => handleNavigation(e));
  };
}, [y]);


const style = () =>{
  if(isClass === "")
    setIsclass("click");
  else
    setIsclass("");

}

  return (
   <>
    
   <Navbar collapseOnSelect expand="lg"  variant="dark"  sticky="top" className={isTransparent ? `bg1 ${isClass}` : "stick navbar click"   }>
   <Container>
  {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
  <Navbar.Toggle onClick={style} aria-controls="responsive-navbar-nav" style={{marginLeft: "85%",width: "16%"}} />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    <Nav.Link href="#Home" style={{ color:"white"}} className="nlink">HOME</Nav.Link>
    {/* <Nav.Link className="nlink" style={{ color:"white"}}  href="./images/CrazyCubes-Whitepaper.pdf" target="_blank">WHITEPAPER</Nav.Link> */}
      <Nav.Link className="nlink" style={{ color:"white"}}  href="#fe">CC</Nav.Link>
      <Nav.Link className="nlink" style={{ color:"white"}} href="#Mint">MINT</Nav.Link>
      <Nav.Link className="nlink" style={{ color:"white"}} href="#Stats">STATS</Nav.Link>
      <Nav.Link className="nlink" style={{ color:"white"}} href="#RM">ROADMAP</Nav.Link>
      <Nav.Link className="nlink" style={{ color:"white"}} href="#Team">TEAM</Nav.Link>
      <Nav.Link className="nlink" style={{ color:"white"}} href="#Faq">FAQS</Nav.Link>
      {/* <Nav.Link  className="mp" style={{ color:"black"}} > Member Portal
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" style={{marginLeft:"5px"}} class="svg-inline--fa fa-rocket fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{marginLeft: "5px; !important"}}><path fill="currentColor" d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path></svg>
       </Nav.Link> */}
      




      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
 
   </>
  );
};

export default Navabar;
