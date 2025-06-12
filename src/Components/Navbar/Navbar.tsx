export default function Navbar(){
    return(
        <div className="w-full h-full flex flex-col pt-5 items-center gap-3">
            <button className="flex items-center justify-start pl-6 w-full h-fit border-none outline-none
          hover:bg-[#ddd8d8c5] py-2 cursor-pointer transition-all duration-200 ease-in-out">
                Home
            </button>

            <div className="w-[88%] h-px bg-[#8a8a8a]"></div>

            <button className="flex items-center justify-start pl-6 w-full h-fit border-none outline-none
          hover:bg-[#ddd8d8c5] py-2 cursor-pointer transition-all duration-200 ease-in-out">
                Experiences
            </button>

            <div className="w-[88%] h-px bg-[#8a8a8a]"></div>

            <button className="flex items-center justify-start pl-6 w-full h-fit border-none outline-none
          hover:bg-[#ddd8d8c5] py-2 cursor-pointer transition-all duration-200 ease-in-out">
                Services
            </button>

            <div className="w-[88%] h-px bg-[#8a8a8a]"></div>

            <button className="flex items-center justify-start pl-6 w-full h-fit border-none outline-none
          hover:bg-[#ddd8d8c5] py-2 cursor-pointer transition-all duration-200 ease-in-out">
                <span className="font-medium border-2 rounded-full px-2 w-fit h-fit flex justify-center">&#x3f;</span> 
                &nbsp;Help Center
            </button>

            <div className="w-[88%] h-px bg-[#8a8a8a]"></div>

            <div className="flex items-start justify-start pl-[25px] pr-[25px] w-full h-fit border-none outline-none
            hover:bg-[#ddd8d8c5] py-2 cursor-pointer transition-all duration-200 ease-in-out">
                Become a host
            </div>

            <button className="flex items-center justify-start pl-[25px] w-full h-fit border-none outline-none
            hover:bg-[#ddd8d8c5] py-2 cursor-pointer transition-all duration-200 ease-in-out">
                Refer a host
            </button>

            <button className="flex items-center justify-start pl-[25px] w-full h-fit border-none outline-none
            hover:bg-[#ddd8d8c5] py-2 cursor-pointer transition-all duration-200 ease-in-out">
                Find a co-host
            </button>
            
            <button className="flex items-center justify-start pl-[25px] w-full h-fit border-none outline-none
            hover:bg-[#ddd8d8c5] py-2 cursor-pointer transition-all duration-200 ease-in-out">
                Gift cards
            </button>

            <div className="w-[88%] h-px bg-[#8a8a8a]"></div>

            <button className="flex items-center justify-start pl-[25px] w-full h-fit border-none outline-none
            hover:bg-[#ddd8d8c5] py-2 cursor-pointer transition-all duration-200 ease-in-out">
                Log in or sign up
            </button>
        </div>
    )
}