import { useEffect,useState } from "react"
import SocietyCard from "./SocietyCard"
import Link from "next/link"
const AllSocieties=()=>{
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
    return(
        <>
         <div className="w-full bg-black py-3 my-3">
        <div  className="max-w-full mx-auto bg-gray-700/30 rounded  mx-[5%] ">
       
       {isLoading && <p className='text-center text-white text-3xl'>Loading........</p>}
       <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-10  "> 
       {societiesData.slice(0, 6).map((item) => {
    return (<SocietyCard title={item.title} coverPic={item.coverPic} url={item.url} />)
})}
      
       </div>
       <Link href="/societies" className="text-white mx-auto mx-11 md:mx-[40%] hover:underline hover:text-[#fce303] my-10 text-xl">View All Societies</Link>

       </div>
            
    
        </div>
        
        </>
    )
}
export default AllSocieties;
