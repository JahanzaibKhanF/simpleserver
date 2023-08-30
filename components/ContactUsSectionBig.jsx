import { useState } from "react"
const ContactUsSectionBig =()=>{
    const [contactData,setContactData]=useState({
        name:"",
        phone:"",
        message:""
    })
   const  handlecontact=(e)=>{
        setContactData({...contactData,[e.target.name]:e.target.value})
        console.log(contactData)
    }
    const sendMail = async () => {
        console.log("Request body:", contactData);
        if (contactData.name === "" || contactData.phone === "" || contactData.message === "") {
          setInputError(true);
        } else {
          setInputError(false);
          setIsLoading(true);
      setMailSent(false);
          try {
            const res = await fetch("/api/send-email", {
              method: "POST",
              body: JSON.stringify(contactData),
            });
      
            if (res.ok) {
             
              setIsLoading(false);
              setMailSent(true);
              setMailError(false);
            } else {
              setIsLoading(false);
              setMailSent(false);
              setMailError(true);
            }
          } catch (error) {
            setIsLoading(false);
            setMailSent(false);
            setMailError(true);
          }
        }
      };
    const [inputError,setInputError]=useState(false)
    const [mailSent,setMailSent]=useState(false)
    const [mailError,setMailError]=useState(false)
    const [isLoading, setIsLoading] = useState(false)
    return(
        <div className="w-full bg-sky-500 py-11">
            <div className="max-w-[1280px] lg:my-11 mx-3 lg:mx-[5%] lg:flex lg:gap-[120px] ">
                <div className="lg:w-3/4">
                    <div className="border-b-2 border-white lg:py-10">
                        <p className="text-3xl sm:text-6xl font-bold text-white">WE ARE READY TO SERVE YOU IN REAL ESTATE</p>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-white my-5">CALL US TODAY</p>
                    {/* <p className="text-3xl sm:text-6xl font-bold text-white">+92 3487896855</p> */}
                    <p className="text-3xl sm:text-6xl font-bold text-white">+92 348789xxxxx</p>

                    {/* <p className="text-3xl sm:text-6xl font-bold text-white">+92 3415396855</p> */}
                    <p className="text-3xl sm:text-6xl font-bold text-white">+92 34153xxxxxx</p>


                </div>
                <div className="lg:w-2/4 bg-black rounded-xl p-3 my-11 lg:my-0">
                    <p className="text-white text-center font-bold text-lg">Request for <span className="text-sky-500">DISCOUNT</span> Booking</p>
                    <input type="text" name="name" value={contactData.name} onChange={handlecontact} placeholder="Full Name" className="bg-black text-white my-5 w-full border-b py-3 border-sky-500 outline-0 hover:border-gray-500 text-sm" />
                    <input type="number" name="phone" value={contactData.phone}  onChange={handlecontact} placeholder="Contact Number" className="bg-black text-white my-5 w-full border-b py-3 border-sky-500 outline-0 hover:border-gray-500 text-sm" />
                    <textarea name="message" value={contactData.message} onChange={handlecontact} placeholder="Message!" className="bg-black text-white my-5 w-full border-b py-3 border-sky-500 outline-0 hover:border-gray-500 text-sm mt-10" ></textarea>
                  {inputError &&   <p className="my-3 text-red-500 text-center">Please Fill All! </p>}
                   {mailError && <p className="my-3 text-red-500 text-center">Something went wrong! Try later </p>}

                   
                <button
  onClick={sendMail}
  className={`bg-sky-500 w-full py-2 rounded-md ${isLoading ? 'cursor-not-allowed bg-gray-500 text-black' : ''} ${mailSent ? ' bg-green-500 text-white' : ''}`}
  disabled={isLoading}
>
  {isLoading
    ? 'Sending...'
    : mailSent
    ? 'Message Sent!'
    : 'SEND'}
</button>
                   {mailSent && <p className="my-3 text-green-500 text-center">We will get back to you soon! </p>}

                </div>
            </div>
        </div>
    )
}
export default ContactUsSectionBig