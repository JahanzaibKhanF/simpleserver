const Welcome =()=>{
    return(
       <div className="w-full">
<div className="max-w-[1280px] mx-auto px-6 my-10">
    <div className="md:flex gap-3">
        {/* 1 */}
        <div className="md:w-1/2">
<div className="bg-gray-400  px-[25%] py-10 text-[#fce303] text-5xl  font-bold "><p>Welcome to</p>
<p >Capital Jaidad</p></div><p className="mx-10 leading-10 text-lg">Welcome to the rapidly emerging Real Estate Company <span className="font-bold">Capital Jaidad Islamabad</span> working from last 18 years. 
    Our professional team is serving many housing societies for marketing purposes and has completed many renowned projects achieving high excellency. 
    Use of most modern techniques of marketing like e-media and web-based medium for mass communication is one of our strengths to reach-out maximum number of clients and customers.</p>
        </div>
        {/* 2 */}
        <div className="md:w-1/2">
        <div className="sm:flex gap-10"><img src="/images/Badge100.png" alt="" />
            <img src="/images/excellence.png" alt="" /></div>
        <img className="w-full " src="/images/parkview_city_down_town.jpg"/>
        </div>
    </div>
</div>
       </div>
    )
}
export default Welcome