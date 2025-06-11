function HeaderSecondary() {
  return (
    <div className="w-full h-fit flex items-center relative justify-between py-3 md:px-2 xl:px-10">
      <div className= "w-32 h-fit xs:w-fit cursor-pointer">
        <img rel="icon" src='assets/airbnb_logo.png' className="w-[100px] hidden 3xs:flex"/>
        <img rel="icon" src='assets/airbnb_icon2.png' className="w-[40px] hidden 4xs:flex 3xs:hidden"/>
      </div>

      <div className="w-0 h-full ml-14 justify-center items-center gap-1 hidden sm:flex 
      md:w-2/4 opacity-0 md:opacity-100 transition-all duration-600 ease-in-out">
        <div className="bg-inherit text-gray-500 h-16 w-fit pr-3 rounded-none flex items-center justify-center 
        cursor-pointer gap-0 hover:text-black hover:border-b-2 hover:border-black">
          <img rel="icon" typeof="image" src="assets/home_icon.png" className="w-15 hover:w-16 transition-all"></img>
            <p>
              Homes
            </p>
        </div>

        <div className="bg-inherit text-gray-500 h-16 w-fit pr-3 rounded-none flex items-center justify-center
         cursor-pointer gap-0 hover:text-black hover:border-b-2 hover:border-black">
          <img rel="icon" src="assets/experience_icon.png" className="w-15 hover:w-16 transition-all"></img>
          <p>
              Experiences
          </p>
        </div>
        
        <div className="bg-inherit text-gray-500 h-16 w-fit pr-3 rounded-none flex items-center justify-center
         cursor-pointer gap-0 hover:text-black hover:border-b-2 hover:border-black">
          <img rel="icon" src="assets/services_icon.png" className="w-15 hover:w-16 transition-all"></img>
          <p>
              Services
          </p>
        </div>
      </div>
      
      <div className="flex w-fit h-20 m-0 items-center gap-2">
        <button className="hidden opacity-0 sm:flex md:opacity-100 transition-all duration-600 ease-in-out items-center justify-center bg-inherit w-32 h-10 text-sm text-wrap text-black rounded-3xl border-none outline-none hover:bg-[#c7c7c7] cursor-pointer">
          Become a host
        </button>

        <div className="flex opacity-100 transition-all duration-400 md:opacity-0 md:w-0 bg-[#e7e7e7] w-10 h-10 text-sm text-wrap text-black rounded-3xl items-center justify-center border-none outline-none hover:bg-[#c7c7c7] cursor-pointer">
          <img rel="icon" src="assets/search_black.png" className="w-4"></img>
        </div>

        <div className="bg-[#e7e7e7] w-10 h-10 transition-all duration-600 ease-in-out text-sm text-wrap text-black rounded-3xl flex items-center justify-center border-none outline-none hover:bg-[#c7c7c7] cursor-pointer">
          <img rel="icon" src="assets/globe.png" className="w-4"></img>
        </div>

        <div className="bg-[#e7e7e7] w-10 h-10 transition-all duration-600 ease-in-out text-sm text-wrap text-black rounded-3xl flex items-center justify-center border-none outline-none hover:bg-[#c7c7c7] cursor-pointer">
          <img rel="icon" src="assets/hamburger.png" className="w-4"></img>
        </div>
      </div>
    </div>
  )
}

export default HeaderSecondary