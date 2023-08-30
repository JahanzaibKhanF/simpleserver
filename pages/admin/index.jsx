import React, { useEffect, useState } from 'react'
import {AiFillEdit} from "react-icons/ai"
import {AiOutlineDelete} from "react-icons/ai"
import Link from 'next/link'
import { useRouter } from 'next/router'
import authHOC from '@/authHOC'

function index() {
  const [societiesData, setsocietiesData] = useState([])
  const [isLoading, setIsLoading] = useState(false)


// for fetching api to show societies list
  const fetchapi= async () =>{
    setIsLoading(true)
    const data = await fetch('/api/societies')

setsocietiesData(await data.json())
    setIsLoading(false)
   }

  //  for deleting society by id
  const deleteSociety = async (_id) =>{
    const res= await fetch(`/api/societies?_id=${_id}`,{
      method:"DELETE"
      
  })
  if (res.status===200){
    console.log("Society deleted successfully with id", _id)
    fetchapi()
  } else{
    console.log("error deleting society with id", _id)
  }
}

 
  useEffect(()  => {
document.title="ADMIN PANEL"
fetchapi()
  },[]);
  const router = useRouter();
const handleEdite=(data)=>{
  localStorage.setItem('editeData', JSON.stringify(data));
  router.push('/admin/editPost');
}
const logout =()=>{
  localStorage.removeItem('authenticated')
  router.push('/admin/login');
}
  return (
    <div className='w-full bg-black  h-screen'>
      <div className='max-w-[1280px] h-full mx-auto sm:px-[100px] pb-[150px]'>
      <h1 className='text-2xl sm:text-3xl font-bold text-white text-center py-10'>Welcome To Admin Panel! </h1>
      <div className='w-full h-full bg-gray-900 overflow-y-auto rounded   p-5'>
      
<div className='flex justify-between'><Link href="admin/createPost" className='text-blue-500 bg-white hover:bg-blue-500 hover:text-white px-5 py-2'>ADD NEW SOCIETY +</Link> <p onClick={logout} className='text-white'>Logout</p></div>
        <h2 className=' font-bold text-2xl text-center text-sky-500 my-5'>SOCIETIES</h2>
   {isLoading && <p className='text-center text-white text-lg'>Loading........</p>}
        
       {
         societiesData.map((item)=>{
           return(
            <div className='w-full mx-auto w-10 bg-black/60 py-3  flex justify-between px-10 my-3 bg-blue-500/10'>
            <Link href={`/societies/${item.url}`} className='text-green-500 hover:text-sky-500'>{item.title} </Link>
            <div className='flex gap-5'>
              <AiFillEdit onClick={() => {
    handleEdite(item);
  }} onclick size={30} className='text-white hover:text-sky-500 cursor-pointer'/>
              <AiOutlineDelete
  onClick={() => {
    if (window.confirm('Are you sure you want to delete this society?')) {
      deleteSociety(item._id);
    }
  }}
  size={30} onclick={()=>handleEdite(item)} className='text-white hover:text-red-500 cursor-pointer'
/>
          </div>
          </div>
           )
         })
        }
      </div>
      </div>
    </div>
    
  )
}
export default authHOC(index)