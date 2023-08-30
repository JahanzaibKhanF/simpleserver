import React from 'react'



export default function (props) {
  return (
    <div className='w-full'>
      
<div className='max-w-[1280px] mx-auto px-6 sm:mx-[100px] mt-[100px] sm:mt-[150px] mb-10 '>
<h1 className='text-orange-500 text-4xl sm:text-5xl font-bold'>{props.title}</h1>
<p className='my-8 text-gray-500 '>{props.date}</p>
<h2 className='text-3xl text-orange-500 font-bold py-5'>Introduction</h2>
<p className='text-[19px] text-gray-700 leading-10'>{props.introduction}</p>
<h2 className='my-5 text-orange-500 text-3xl font-bold'>{props.title} Developers & Owners</h2>
<p className='text-[19px] text-gray-700 leading-10'>{props.developedBy}</p>
<div className='sm:w-4/5 mx-auto border border-orange-500 p-2' >
<img src={props.devpic} alt="developed by" className='w-full h-full' />
</div>
<h2 className='text-3xl text-orange-500 font-bold py-5'>{props.title} NOC</h2>
<p className='text-[19px] text-gray-700 leading-10'>{props.nocDetails}</p>
<div className='sm:w-4/5 mx-auto border border-orange-500 p-2' >
<img src={props.nocpic} alt="NOC Picture" className='w-full' />
</div>
<h2 className='text-3xl text-orange-500 font-bold py-5'>{props.title} Location</h2>
<p className='text-[19px] text-gray-700 leading-10'>{props.locationDetails}</p>
<h2 className='text-3xl text-orange-500 font-bold py-5'>{props.title} Maps</h2>
<div className='sm:w-4/5 mx-auto border border-orange-500 p-2' >
<img src={props.mapPic} alt="Map Location" className='w-full' />
</div>

</div>



    </div>
  )
}


