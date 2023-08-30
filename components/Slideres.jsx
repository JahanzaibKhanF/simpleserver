import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Slideres=()=>{
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the value as needed
    arrows:false
  };
      return (
        <div className="w-full   ">
          <div className=" relative">
            <div className="w-full h-[200px] absolute bg-black/60 h-full  z-[10]"></div>
          <Slider {...settings}>
            <div className="w-full h-[600px] ">
              <img className="w-full h-full" src="/images/parkview_city_down_town.jpg"/>
            </div>
            <div  className="w-full h-[600px]">
              <img className="w-full h-full" src="/images/parkview_city.jpg"/>
            </div>
            <div className="w-full h-[600px]">
              <img className="w-full h-full" src="/images/capital_smart_city.jpg"/>
            </div>
            
          </Slider></div>
        </div>
      );
}
export default Slideres;