import {ImLocation2} from 'react-icons/im'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { useState,useEffect } from 'react'
import Link from 'next/link'

const Footer = (props) =>{

    const societiesData=props.societiesData
    
    return(
        
<div className="w-full bg-sky-900 text-white md:py-3 ">
<div className="max-w-[1280px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 sm:gap-10 md:gap-[100px] mx-6 px-6  sm:mx-[100px]">
    {/* 1 */}
<div> 
   
    <ul className="text-xl">
    <li className="border-b border-gray-400 py-5 font-bold text-xl">HEAD OFFICE</li>
        <li className="gap-5 flex py-5"><ImLocation2/> 2nd Floor xx Plaza
Jinnah Avenue ,Blue Area, Islamabad</li>
<li className="gap-5 flex py-5"><BsFillTelephoneFill/>+92 3487xxxx</li>
<li className="border-b border-gray-400 py-5 font-bold text-xl">REGIONAL OFFICE</li>
<li className="gap-5 flex py-5"><ImLocation2/> 2nd Floor xx Plaza
Jinnah Avenue ,Blue Area, Islamabad</li>
<li className="gap-5 flex py-5"><BsFillTelephoneFill/>+92 34878xxxx</li>
<li className="border-b border-gray-400 py-5  text-xl">info@capitaljaidad.com</li>
    </ul>
</div>
{/* 2 */}
<div>
    <ul className='text-lg'>
    <li className="border-b border-gray-400 py-5 font-bold text-xl">QUICK LINK</li>
    <li className='py-5 hover:text-[#fce303]'><Link href="/">HOME</Link></li>

    <li className='py-5'>BLOG</li>
    <li className='py-5 hover:text-[#fce303]'>VIDEOS</li>
    <li className='py-5 hover:text-[#fce303]'><Link href="/societies">SOCIETIES</Link></li>

    <li className='py-5 hover:text-[#fce303]'>OFFERS</li>
    <li className='py-5 hover:text-[#fce303]'><Link href="/#contactus">CONTACT US</Link></li>


    </ul>
</div>
{/* 3 */}
<ul className="text-lg">
<li className="border-b border-gray-400 py-5 font-bold text-xl"><Link href="/societies">SOCIETIES</Link></li>
{
    societiesData.map((item)=>{
        return(
            <>
            <li className='py-5 hover:text-[#fce303]'><Link href={`/societies/${item.url}`}>{item.title}</Link></li>
            </>
        )
    })
}
<li className="border-b border-gray-400 py-5 font-bold text-2xl text-[#fce303]">Disclaimer!</li>

<p className='text-lg '>All data, stats, and information set forth on this platform/website/blogs are initially gathered from reliable online sources. However, no warranties/guarantees are made for the precision/accuracy of the information shared in any content on the website. Any investment-related financial or physical loss inflicted on the user or faced by the user or any of his/her associates using the Sky Marketing website/blogs could not make Capital Jaidad held responsible in any local or international justice institutions/courts.Please proceed with the investments at your own risk.</p>

</ul>
</div>
<div className='md:flex justify-between max-w-[1280px] mx-auto px-3 md:px-10 bg-black/80 rounded py-5 mt-2 text-lg sm:text-xl'>
    <p><Link href={'/'} className='text-[#fce303] hover:text-sky-500' >© 2023 Capital Jaidad </Link>All Rights Reserved</p> 
    <p className='py-3 md:py-0'>CEO <span className='text-sky-500'>Junaid Khan</span></p>
    <p>Powered by <Link href={'mailto:xxxx@gmail.com'} className='text-[#fce303] hover:text-sky-500'>xxxxx</Link> </p>
    </div>
</div>
    )
}
export default Footer