import React, {useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from './CarouselItem';
import image1 from './images/1.jpg';
import image3 from './images/2.jpg';
import image5 from './images/3.jpg';
import image6 from './images/4.jpg';


const Crousel = () => {
    const [array1, setArray] = useState([{img: image1},{img: image5} ,{img: image3},{img: image6},{img: image1},{img: image5} ,{img: image3},{img: image6}]);
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1020 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1019, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      
    return (
     <>

<Carousel 
  swipeable={true}
  draggable={true}  
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={1000}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>

 {array1.map((item) => <CarouselItem imageSrc={item.img}/>)}
</Carousel>
<br />
<br /> <br/>
<br/>
<br/>
         
{/* <div className="timeline_text  ">
              Welcome to CrazyCubes. Dad has disappeared and the only thing Kai and Nico could find is a note that reads “Find me in the Metaverse'', next thing you know the two kids coded themselves into the Metaverse and while they did that, they added themselves a couple of super powers because they knew they could be attacked by Hackers. Lore will be written by the DAO.
<br  /> <br  />
CrazyCubes it’s a collection of 10,000 unique (out of 2million+ combinations) programmatically generated Non-Fungible Tokens looking for dad on the Ethereum blockchain as ERC-721 NFTs. Each MetaKid token grants access to the Exclusive DAO community and voting rights over the Blue-Chip NFTs DAO assets and the CrazyCubes Game Studio and IP. A first of its kind.
             <br />
           
           <br/>
           
This is a Community Driven project.
<br/><br  />
DAO Governance over Blue Chip NFTs Assets Acquisition and Our Own Game Studio, the community will vote on what path to take and how to proceed with funds coming from the 50% of the mint/launch and 7.5% of the Royalties the project creators get from Open Sea.
<br/><br  />
The plan is simple and you can read it fully in our Discord server by <a href="https://discord.gg/56AKdEKncC " >Clicking Here</a>
              </div><br/><br  /><br/><br  /> */}
     </>
    )
}

export default Crousel
