import React, {useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItemT from './TeamCrouselItem';
import image1 from './images/1.jpg';
import image3 from './images/2.jpg';
import image5 from './images/3.jpg';
import image6 from './images/4.jpg';


const TCrousel = () => {
    const [array1, setArray] = useState([{img: image1,name: "Sheharyar",des:"Team Co-Founder / Creator"},{img: image5,name: " Usman",des:"Team Co-Founder / Lead Dev"} ,{img: image3,name: "Waqar",des:"Team Co-Founder / Operations"},{img: image6,name: "Anas",des:"Team Co-Founder / Operations"}]);
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
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
 {array1.map((item) => <div><CarouselItemT imageSrc={item}/></div>)}
</Carousel>
     </>
    )
}

export default TCrousel
