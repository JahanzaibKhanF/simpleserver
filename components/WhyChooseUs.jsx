import {SiCoinmarketcap} from "react-icons/si"
import {AiOutlineDollarCircle} from "react-icons/ai"
import {BsPuzzle} from "react-icons/bs"
import {DiReact} from "react-icons/di"
import {FaRegBuilding} from "react-icons/fa"
import ReviewsCard from "./ReviewsCard"
const WhyChooseUs=()=>{
    return(
    <div className="w-full">
        <div className="mx-auto max-w-[1280px] mx-auto px-6 my-5 ">
            <div className="w-1/7 sm:w-1/2 mx-auto border-b-4 border-orange-400  py-5"><p className="text-4xl font-bold text-center ">WHY CHOOSE CAPITAL JAIDAD</p></div>
        <div className="md:w-[85%] md:flex mx-auto my-10" >
            <div className=" md:w-1/2">
                <ul className="font-bold text-lg text-orange-500">
                    <li className="my-10 flex gap-[100px]"><SiCoinmarketcap size={30}/><p>MARKETERS</p></li>
                   <li className="my-10 flex gap-[100px]"><AiOutlineDollarCircle size={30}/><p>INVESTMENT CONSULTANT</p></li>

                   <li className="my-10 flex gap-[100px]"><BsPuzzle size={30}/><p>DEALER & PROMOTERS </p></li>

                   <li className="my-10 flex gap-[100px]"><DiReact size={30}/>DEVELOPERS</li>

                  <li className="my-10 flex gap-[100px]"><FaRegBuilding size={30}/>PROPERTY ADVISOR</li>

                </ul>
            </div>
            <div className="md:w-1/2 ">
                <p className="text-center  text-2xl md:text-4xl">Our clients love us</p>
                <ReviewsCard name="John Doe" pic="https://loremflickr.com/320/240/cat"
                review="Had taken consultation regarding purchase of property in islamabad for my relatives, thanks to team Capital Jaida for making it that simple. Highly recommended..!" 
                />
                <ReviewsCard name="Junaid" pic="https://loremflickr.com/320/240/imran"
                review="Had taken consultation regarding purchase of property in islamabad for my relatives, thanks to team Capital Jaida for making it that simple. Highly recommended..!" 
                />
                <ReviewsCard name="Hisham" pic="https://loremflickr.com/320/240/srk"
                review="Had taken consultation regarding purchase of property in islamabad for my relatives, thanks to team Capital Jaida for making it that simple. Highly recommended..!" 
                />
                
            </div>
            
        </div>
        <div className="mx-auto sm:w-2/3 ">
                    <p className="text-6xl text-center text-blue-800 font-medium">Our clients love us</p>
                 <p className="text-3xl text-center py-5">We have an average of 4.8</p>
                    <img src="images/stars.png" className="mx-auto" />
        <button className="mx-[25%] sm:mx-[35%] w-1/2 sm:w-1/4 bg-blue-800 text-blue text-white rounded-md py-3 my-5">VIEW ALL REVIEWS</button>
        </div>
        </div>
    </div>
        )
}
export default WhyChooseUs