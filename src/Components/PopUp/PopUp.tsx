export default function PopUp(){
    return(
        <div className="w-full h-full pb-[20px] flex
        flex-col items-center justify-start pt-5 bg-white rounded-[10px] 
        transition-all duration-300 ease-in-out equal-shadow gap-2 ">

            <button className="flex items-center justify-start pl-6 w-full h-fit border-none outline-none bg-white
          hover:bg-[#e9e5e551] cursor-pointer py-1 transition-all duration-200 ease-in-out">
                <span className="font-medium border-2 rounded-full px-2 w-fit h-fit flex justify-center">&#x3f;</span> 
                &nbsp;Help Center
            </button>

            <div className="w-[230px] h-px bg-[#c7c7c7]"></div>

            <div className="flex items-start justify-start pl-[25px] pr-[25px] w-full h-fit border-none outline-none
            bg-white hover:bg-[#e9e5e551] cursor-pointer py-1 transition-all duration-200 ease-in-out">
                <div className="w-[80%] p-0 m-0 ">
                    <p className="font-medium">Become a host</p>

                    <p className="text-[13px] text-gray-400 leading-none">
                        It's easy to start hosting and earn extra income
                    </p>
                </div>
                <div className="w-[30%]"> 
                    <img className="w-full" src="assets/home_icon.avif"></img>
                </div>
            </div>

            <div className="w-[230px] h-px bg-[#c7c7c7]"></div>

            <button className="flex items-center justify-start pl-[25px] w-full h-fit border-none outline-none bg-white
            hover:bg-[#e9e5e551] cursor-pointer py-1 transition-all duration-200 ease-in-out">
                Refer a host
            </button>

            <button className="flex items-center justify-start pl-[25px] w-full h-fit border-none outline-none bg-white
            hover:bg-[#e9e5e551] cursor-pointer py-1 transition-all duration-200 ease-in-out">
                Find a co-host
            </button>
            
            <button className="flex items-center justify-start pl-[25px] w-full h-fit border-none outline-none bg-white
            hover:bg-[#e9e5e551] cursor-pointer py-1 transition-all duration-200 ease-in-out">
                Gift cards
            </button>

            <div className="w-[230px] h-px bg-[#c7c7c7]"></div>

            <button className="flex items-center justify-start pl-[25px] w-full h-fit border-none outline-none bg-white
            hover:bg-[#e9e5e551] cursor-pointer py-1 transition-all duration-200 ease-in-out">
                Log in or sign up
            </button>
        </div>
    )
}