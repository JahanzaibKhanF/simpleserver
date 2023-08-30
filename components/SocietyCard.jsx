import { useRouter } from "next/router"

const SocietyCard=(props)=>{
    const router =useRouter();
    return(
        <>
        <div onClick={() => router.push(`/societies/${props.url}`)} className="w-full h-[200px] relative overflow-hidden shadow-xl shadow-black rounded-lg border-4  hover:border-yellow-400 hover:scale-110 cursor-pointer ">
            <img src={props.coverPic} alt="" className="w-full h-full" />
            <div className="w-full absolute bottom-0 left-0 bg-yellow-500 overflow-hidden"><p className="text-center uppercase text-white">{props.title}</p></div>
        </div>
        </>
    )
}
export default SocietyCard