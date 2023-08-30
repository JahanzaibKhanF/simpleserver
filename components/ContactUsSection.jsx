import Link from "next/link";
import { useState } from "react";


const ContactUsSection =()=>{
    const [contactData,setContactData]=useState({
        name:"",
        phone:"",
        message:""
    })
    return(
        <div className="w-full">
        <div className="max-w-[1280px] mx-auto sm:px-6">
            <div className="   w-full sm:flex bg-gray-500/60 md:rounded-full border border-[2px] md:border-dashed md:border-black px-3 sm:px-11">
            <div className="w-[50%] sm:w-[25%] mx-auto py-2 sm:py-11"><img src="/images/phone.png "className="w-full"/></div>
            <div className="w-full"><p className="text-4xl sm:text-6xl mt-11 text-center sm:text-left">WE ARE 24/7 AVAILABLE</p>
            <Link href="/#contactus"><button className="bg-black text-white font-bold py-4 w-2/4 mx-[20%] md:mx-[10%] my-[10%] rounded-xl hover:text-black hover:bg-yellow-400">CONTACT US</button></Link>
            </div>
            </div>
        </div>
    </div>
    )
}
export default ContactUsSection;