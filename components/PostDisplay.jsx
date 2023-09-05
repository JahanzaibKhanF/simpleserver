import React from 'react'



export default function (props) {
  return (
    <div className='w-full'>
        <div className='  sm:mt-[100px] h-[300px] sm:h-[470px]   text-center relative '>
          <img src={props.coverPic} alt={props.title} className='absolute w-full h-full z-[-1]' />
          <h1 className='text-white  text-2xl sm:text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase bg-black/60 p-2 rounded-md'>{props.title}</h1></div>

<div className='max-w-[1280px] mx-auto px-6 sm:mx-[100px]  mb-10 '>


<p className='my-8 text-gray-500 '>{props.date}</p>
<h2 className='text-3xl text-orange-500 font-bold sm:py-5'>Introduction</h2>
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


