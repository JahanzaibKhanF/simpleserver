
import Link from "next/link"
import { useState,useEffect } from "react"
import SocietyCard from "@/components/SocietyCard"
import Head from "next/head"
import {BiArrowBack} from "react-icons/bi"
import WhatsAppConnect from "@/components/WhatsAppConnect"

const index = () =>{
  const [societiesData, setsocietiesData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchapi= async () =>{
        setIsLoading(true)
        const data = await fetch('/api/societies')
       
        setsocietiesData( await data.json())
        setIsLoading(false)
 }
    useEffect(()  => {
        
fetchapi();
},[])
  return (
    <>
   <Head>
      <title>CAPITAL JAIDAD | Find Properties In Islamabad</title>

        <meta name="description" content="Capital Jaidad Finds Properties For You In Islamabad" />
        <meta
          property="og:title"
          content="CAPITAL JAIDAD | Find Properties In Islamabad"/>
        <meta property="og:description" content="Capital Jaidad Finds Properties For You In Islamabad" />
        <meta property="og:image" content="https://loremflickr.com/g/320/240/city" />
      </Head>
    <div className="w-full bg-black py-3  h-screen">
<div className="flex sm:gap-11 py-5 mx-6">   <Link href={"/"}><BiArrowBack size={30} className="text-white hover:text-[#fce303]"/> </Link>  <h1 className="text-white text-2xl text-center my-5 ">Top Societies in Islamabad | Pakistan</h1>
</div>
    <div  className="max-w-full mx-auto bg-gray-700/30 rounded  mx-[5%] ">
   
   {isLoading && <p className='text-center text-white text-3xl'>Loading........</p>}
   <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-10  "> 
   {societiesData.map((item) => {
return (<SocietyCard title={item.title} coverPic={item.coverPic} url={item.url} />)
})}
  <WhatsAppConnect/>
   </div>

   </div>
   

    </div>
   
    </>
  )
}
export default index
