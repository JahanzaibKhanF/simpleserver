
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'
import {BiArrowBack} from "react-icons/bi"
import authHOC from '@/authHOC';
function createPost () {
  // date from broswers
  const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1; // Months are zero-based, so adding 1
const year = date.getFullYear();  
const currentDate = `${day}-${month}-${year}`;

const [societiesData, setSocietiesData] = useState({
  title:"",

  introduction:"",
  coverPic:"",
  developedBy:"",
  devpic:"",
  nocDetails:"",
  nocpic:"",
  locationDetails:"",
  mapPic:"",
  url:"",
  date:currentDate,
  seoDetails:"",
  city:""


})

const [titleError, setTitleError] = useState(false)
const [apiError, setApiError] = useState(false)
const router =useRouter();
const changeHandler=(e)=>{
const {name,value}=e.target;
setSocietiesData((prevData)=>(
  {
    ...prevData,[name]:value
  }
)

)
if (societiesData.title === "" || societiesData.title === null || societiesData.title.length<10) {
  setTitleError(true)
}else{
  setTitleError(false)
}
}

const postData = async () => {
  if (societiesData.title === "" || societiesData.title === null || societiesData.title.length < 10) {
    setTitleError(true);
    scrollTo(0, 0);
   
   
  } else {
    societiesData.url=societiesData.title.replace(/ /g, '-').toLowerCase();
   
   

    setTitleError(false);
    fetch('/api/societies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(societiesData)
    })
    .then(response => {
      if(response.status===201){
        router.push('/admin')
      }
      else{
        console.log('Error creating new society ....');
        setApiError(true);
      }
      response.json()
    })
    .then(data => {
      console.log('Response from creating new society:', data);
    
 
    })
    .catch(error => {
      console.error('Error creating new society:', error);
      setApiError(true);
    });
    
    
    
    
    
    
  }
};


  return (
    <div className='w-full bg-black  h-full'>
      <div className='max-w-[1280px] h-full  mx-auto sm:px-[100px]'>
      <h1 className='text-3xl font-bold text-white text-center py-10'>Add New Society</h1>
      <div className='w-full h-[500px] bg-gray-900 rounded p-5 h-full'>
      <Link href="/admin" ><BiArrowBack className='bg-white hover:bg-blue-500 hover:text-white text-blue-500' size={30}/></Link>

     <div className='my-[10] w-[80%] mx-auto '>
      <p className='my-3 text-lg text-white'>Add Society Title</p>
     <input type="text" name="title" onChange={changeHandler} value={societiesData.title} placeholder='Society Title' className='w-full px-2 py-3 outline-0 text-xl rounded' />
 {titleError &&    <p className='text-red-500'>Title is Required (please enter min 10 characters title)</p>}
     <p className='my-3 text-lg text-white'>Indroduction</p>
    

     <textarea rows={8} type="text" name="introduction" onChange={changeHandler} value={societiesData.introduction} placeholder='Full Details of Society' className='w-full outline-0 text-lg rounded py-3 px-2' ></textarea>
     <p className='my-3 text-lg text-white'>Cover/thumbnail Photo</p>
     <input type="text" name="coverPic" onChange={changeHandler} value={societiesData.coverPic} placeholder='Past Cover/Thumbnail Image link' className='w-full px-2 py-3 outline-0 text-xl rounded' />
     <div className='sm:w-[300px] mx-auto h-[150px] sm:h-[200px] bg-gray-300 my-3 overflow-hidden'>{societiesData.coverPic ? (<img src={societiesData.devpic}   className='w-full h-full' />):(<p className='text-center my-10'>No Picture Selected</p>)}</div>

     <p className='my-3 text-lg text-white'>Developers Details</p>
     <textarea rows={8} type="text" name="developedBy" onChange={changeHandler} value={societiesData.developedBy} placeholder='Full Details of Developers' className='w-full outline-0 text-lg rounded py-3 px-2' ></textarea>

     <p className='my-3 text-lg text-white'>Developers Photo</p>
     <input type="text" name="devpic" onChange={changeHandler} value={societiesData.devpic} placeholder='Past Developers Image link here' className='w-full px-2 py-2 outline-0 text-md rounded' />
     <div className='sm:w-[300px] mx-auto h-[150px] sm:h-[200px] bg-gray-300 my-3 overflow-hidden'>{societiesData.devpic ? (<img src={societiesData.devpic}   className='w-full h-full' />):(<p className='text-center my-10'>No Picture Selected</p>)}</div>
     <p className='my-3 text-lg text-white'>NOC Details</p>
     <textarea rows={8} type="text" name="nocDetails" onChange={changeHandler} value={societiesData.nocDetails} placeholder='Full Details of NOC' className='w-full outline-0 text-lg rounded py-3 px-2' ></textarea>
     <p className='my-3 text-lg text-white'>NOC Photo</p>
     <input type="text" name="nocpic" onChange={changeHandler} value={societiesData.nocpic} placeholder='Past NOC Image link here' className='w-full px-2 py-2 outline-0 text-md rounded' />
     <div className='sm:w-[300px] mx-auto h-[150px] sm:h-[200px] bg-gray-300 my-3 overflow-hidden'>{societiesData.nocpic ? (<img src={societiesData.nocpic}   className='w-full h-full' />):(<p className='text-center my-10'>No Picture Selected</p>)}</div>



     <p className='my-3 text-lg text-white'>Location Details</p>
     <textarea rows={8} type="text" name="locationDetails" onChange={changeHandler} value={societiesData.locationDetails} placeholder='Full Details of Location' className='w-full outline-0 text-lg rounded py-3 px-2' ></textarea>
     <p className='my-3 text-lg text-white'>Map/Location Photo</p>
     <input type="text" name="mapPic" onChange={changeHandler} value={societiesData.mapPic} placeholder='Past NOC Image link here' className='w-full px-2 py-2 outline-0 text-md rounded' />
     <div className='sm:w-[300px] mx-auto h-[150px] sm:h-[200px] bg-gray-300 my-3 overflow-hidden'>{societiesData.mapPic ? (<img src={societiesData.mapPic}   className='w-full h-full' />):(<p className='text-center my-10'>No Picture Selected</p>)}</div>
     <p className='my-3 text-lg text-white'>SEO Details</p>
     <textarea rows={8} type="text" name="seoDetails" onChange={changeHandler} value={societiesData.seoDetails} placeholder='Full Details of SEO, eg: keywords or description' className='w-full outline-0 text-lg rounded py-3 px-2' ></textarea>

     <p className='my-3 text-lg text-white'>City of Society</p>
     <input type="text" name="city" onChange={changeHandler} value={societiesData.city} placeholder='City of Society, eg: Islamabad' className='w-full px-2 py-2 my-3 outline-0 text-md rounded' />


<button onClick={postData} className='bg-sky-500 text-white py-2 w-[150px] hover:text-white hover:bg-sky-500 sm:w-[200px] mx-auto'>Post</button>
    
    {apiError && <p className='text-red-500'>Error while Posting : Server Error or Check If Post Already Exists</p>}
     </div>
      

      </div>
      </div>
    </div>
  )
}
export default authHOC(createPost)