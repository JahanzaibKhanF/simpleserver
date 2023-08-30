import Link from 'next/link'
import React from 'react'

export default function WhatsAppConnect() {
  return (
<div className='w-full'><div className='z-10 left-4 hover:bg-[#fce303] hover:-translate-y-3 hover:translate-x-5 transition ease-in-out duration-300 hover:scale-110  fixed bottom-5 w-[80px] h-[80px] bg-gray-300 p-1 cursor-pointer rounded-full my-11 text-white'><Link href="https://wa.me/+9234" target='_blank'><img src="/images/whatsapp.png" className='w-full h-full' alt="" /></Link></div>
</div>  )
}
