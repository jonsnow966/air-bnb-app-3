function HeaderSecondary() {
  return (
    <div className="w-full h-28 flex items-center justify-between">
      <div className= "w-32 h-16 ml-8 cursor-pointer">
        <img rel="logo" src="assets/airbnb-ar21.svg" className="w-full h-full"/>
      </div>

      <div className="w-2/4 h-full ml-14 justify-center items-center gap-2 hidden md:flex">
        <div className="bg-inherit text-gray-500 h-16 w-28 rounded-none flex items-center justify-center cursor-pointer gap-2 hover:text-black hover:border-b-2 hover:border-black">
          <img rel="icon" src="assets/homes-ico.avif" className="w-10 hover:w-12 transition-all"></img>
            <p>
              Homes
            </p>
        </div>

        <div className="bg-inherit text-gray-500 h-16 w-32  rounded-none flex items-center justify-center cursor-pointer gap-2 hover:text-black hover:border-b-2 hover:border-black">
          <img rel="icon" src="assets/experiences-ico.avif" className="w-6 hover:w-8 transition-all"></img>
          <p>
              Experiences
          </p>
        </div>
        
        <div className="bg-inherit text-gray-500 h-16 w-28  rounded-none flex items-center justify-center cursor-pointer gap-2 hover:text-black hover:border-b-2 hover:border-black">
          <img rel="icon" src="assets/services-ico.avif" className="w-8 hover:w-10 transition-all"></img>
          <p>
              Services
          </p>
        </div>
      </div>
      
      <div className="flex w-60 h-20 m-0 sm:mr-8 justify-center items-center gap-2">
        <button className="hidden [770px]:flex md:flex items-center justify-center bg-inherit w-32 h-10 text-sm text-wrap text-black rounded-3xl border-none outline-none hover:bg-[#c7c7c7] transition-colors">
          Become a host
        </button>

        <div className="flex sm:flex md:hidden  bg-[#e7e7e7] w-10 h-10 text-sm text-wrap text-black rounded-3xl items-center justify-center border-none outline-none hover:bg-[#c7c7c7] transition-colors cursor-pointer">
          <img rel="icon" src="assets/search-icon-black.png" className="w-4"></img>
        </div>

        <div className="bg-[#e7e7e7] w-10 h-10 text-sm text-wrap text-black rounded-3xl flex items-center justify-center border-none outline-none hover:bg-[#c7c7c7] transition-colors cursor-pointer">
          <img rel="icon" src="assets/globe.avif" className="w-4"></img>
        </div>

        <div className="bg-[#e7e7e7] w-10 h-10 text-sm text-wrap text-black rounded-3xl flex items-center justify-center border-none outline-none hover:bg-[#c7c7c7] transition-colors cursor-pointer">
          <img rel="icon" src="assets/hamburger.png" className="w-4"></img>
        </div>
      </div>
    </div>
  )
}

export default HeaderSecondary