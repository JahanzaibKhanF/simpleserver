import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function () {
    const [pin,setPIN]=useState('')
    var myStrongPIN ="5333";
    const [error,setError]=useState(false)
    const [correct,setCorrect]=useState(false)
    const router =useRouter();
    const handleChange = (e) =>{
        setPIN(e.target.value)
        if (e.target.value==myStrongPIN && e.target.value.length>3) {
            setError(false)
            setCorrect(true)
            localStorage.setItem('authenticated','yesAuthenticated')
            router.push('./')
            
    } else if(e.target.value.length>3 && e.target.value!=myStrongPIN){
        {
            setError(true)
            setCorrect(false)
            localStorage.removeItem('authenticated')

        } 
    }
}

  return (
    <div className='bg-black w-full h-screen'>
        <div className='max-w-[1280px] mx-auto px-10 sm:px-[400px] py-10'>
            <p className='text-xl my-5 text-white text-center'>Login</p>
            <div className='bg-gray-900 py-10 px-5 rounded'>
                <input type="password" name='pin' onChange={handleChange} value={pin} placeholder='Enter your pin'  className='w-full px-2 py-3 outline-0 text-xl rounded text-sky-500 bg-black' />
{error&&<p className='text-red-500 text-center'>Wrong PIN!</p>}
{correct&&<p className='text-green-500 text-center'>Access Granted</p>}

</div>
        </div>
    </div>
  )
}

