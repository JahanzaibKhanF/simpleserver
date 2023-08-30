import {BsChatQuote} from "react-icons/bs"
const ReviewsCard =(props)=>{
    return(
        <div className="w-full flex gap-[5%] h-[250px] bg-sky-500 rounded-lg px-3 py-10 my-10 relative">
            <div className="absolute rounded-full bg-white w-10 h-10 border-sky-500 border border-2 left-1/2 -top-5 p-2"><BsChatQuote size={20} className="text-sky-500"/></div>
            <div className="w-[140px] h-[130px] rounded-full overflow-hidden bg-orange-500">
                <img src={props.pic} className="w-full h-full" />
            </div>
            <div className="w-[75%] text-white"><p>{props.review}</p>
            <p className="mt-10 text-lg font-bold ">{props.name}</p>
            </div>
        </div>
    )
}
export default ReviewsCard