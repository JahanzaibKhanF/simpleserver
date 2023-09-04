
import { FiMenu } from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai"
import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from "next/link";
const Navbar =(props)=>{
 const societiesData=props.societiesData
    const [isMenuOpen, setIsMenuOpen]=useState(false)
    const handelMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    const handleCloseMenu=()=>{
        if(isMenuOpen){
            setIsMenuOpen(false)
        }
    }
 
    return (
        <>
        <div className="w-full  fixed  top-0 z-20  ">
        <div onClick={handleCloseMenu} className="max-w-full    ">
            <div  className="  w-full relative z-10 bg-black h-[60px] md:h-[90px] lg:h-[100px]  flex justify-between px-10">
               
            <div className='hidden lg:block  w-[330px] overflow-hidden'><Link href="/"><img src="/images/logo.jpg" className='w-full ' /></Link></div>
            <div className=' lg:hidden  w-[200px] md:w-[300px] overflow-hidden'><Link href="/"><img src="/images/logo.jpg" className='w-full ' /></Link></div>
              <div className='hidden lg:block'>  <ul className=" text-white  flex gap-10  lg:py-[70px]">
                <li className="hover:text-[#fce303] cursor-pointer"><Link href="/">HOME</Link></li>
                {/* <li className="hover:text-[#fce303] cursor-pointer">BLOG</li> */}
                {/* <li className="hover:text-[#fce303] cursor-pointer">VIDEOS</li> */}
                <li className="hover:text-[#fce303] cursor-pointer relative group"><Link href="/societies">SOCIETIES</Link>
                <div className="hidden group-hover:block absolute text-white bg-black/70 shadow-lg border px-5 py-5 w-[300px]">
                <ul className="w-full">
                 {
                    societiesData.map((item)=>{
                        return(
                            <>
                            <li className="my-4 hover:text-[#fce303]  hover:border-[#fce303] hover:border-l-4 pl-2    "><Link href={`/societies/${item.url}`}>{item.title}</Link></li>
                            </>
                        )
                    })
                 }
                </ul>
                </div>
                
                </li>
                
                {/* <li className="hover:text-[#fce303] cursor-pointer">OFFERS</li> */}
                <li className="hover:text-[#fce303] cursor-pointer"><Link href="/#contactus">CONTACT US</Link></li>
            </ul></div>
            <div onClick={handelMenu} className="py-2 md:py-6 lg:py-8 lg:hidden">{isMenuOpen ? (<AiOutlineClose className={` text-white`} size={50}/>):(<FiMenu  className="text-white" size={50}/>)}</div>
            </div>
             {/* small menu */}
             <div onClick={(e)=>e.stopPropagation()} className={`block lg:hidden bg-black/90 absolute  lg:h-1  h-full w-[70%]  shadow-lg shadow-black transition-all duration-3000 
              ${isMenuOpen? "top-10  h-[452px] ":" bottom-[600px] "} right-[15%] md:right-0 pt-[70px] md:pt-[120px]  `}>  <ul className=" text-white bg-black/90  ">
                <li className="py-3 border-b px-2 hover:bg-sky-700"><Link href="/">HOME</Link></li>
                <li className="py-3 border-b px-2 hover:bg-sky-700">BLOG</li>
                <li className="py-3 border-b px-2 hover:bg-sky-700">VIDEOS</li>
                <li className="py-3 border-b px-2 hover:bg-sky-700 group relative"><Link href="/societies">SOCIETIES</Link>
                <div className="hidden group-hover:block absolute text-white bg-black/80 shadow-lg px-5 py-5 w-[300px] border sm:w-[400px]">
                <ul className="w-full">
                 {
                    societiesData.map((item)=>{
                        return(
                            <>
                            <li className="my-4 hover:text-[#fce303]  hover:border-[#fce303] hover:border-l-4 pl-2    "><Link href={`/societies/${item.url}`}>{item.title}</Link></li>
                            </>
                        )
                    })
                 }
                </ul>
                </div>
                </li>
                <li className="py-3 border-b px-2 hover:bg-sky-700">OFFERS</li>
                <li className="py-3 border-b px-2 hover:bg-sky-700"><Link href="/#contactus">CONTACT US</Link></li>
            </ul></div>
            
        </div>
        </div>
       
        </>
    )
}

export default Navbar