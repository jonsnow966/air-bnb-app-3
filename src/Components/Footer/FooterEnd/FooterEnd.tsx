function FooterEnd() {
  return (
    <div className="flex relative items-center flex-col lg:flex-row text-[14px] xs:text-[16px] lg:text-[16px] 
    w-full h-fit border-gray-300 border-t-[1px] text-black p-0 sm:pt-1">
      <div className='flex items-center gap-0 xs:gap-1'>
        <span className='mr-0.5 mb-0.5 cursor-text truncate'>&copy;&nbsp;2025 Airbnb,Inc.</span>

        <span className='mx-1 mb-[8px]'>.</span>

        <div className='text-black font-normal cursor-pointer hover:text-black hover:underline hover:underline-offset-1'>
          Terms 
        </div>

        <span className='mx-1 mb-[8px]'>.</span>

        <div className='text-black font-normal cursor-pointer hover:text-black hover:underline hover:underline-offset-1'>
          Sitemap 
        </div>

        <span className='mx-1 mb-[8px]'>.</span>

        <div className='text-black font-normal cursor-pointer hover:text-black hover:underline hover:underline-offset-1'>
          Privacy 
        </div>

        <span className='mx-1 mb-[8px]'>.</span>

        <div className='text-gray-500 font-normal cursor-pointer hover:text-gray-500 hover:underline hover:underline-offset-1 truncate flex gap-2 items-center'>
          <p className="hidden sm:flex">Your Privacy Choices</p>
          <img rel="icon" src="assets/icon-footer.avif" className="w-6 h-3"></img>
        </div>
      </div>

      <div className="flex items-center gap-[1px] md:gap-1 relative lg:absolute lg:right-0 h-fit w-fit">
        <div className="flex h-8 w-fit p-3 justify-center items-center gap-1 rounded-lg hover:bg-[#e2e2e2] cursor-pointer">
          <img rel="icon" src="assets/globe.avif" className="w-4 h-4"></img>
          English (US)
        </div>

        <div className="flex h-8 w-fit p-3 justify-center items-center gap-1 rounded-lg hover:bg-[#e2e2e2] cursor-pointer">
          $ USD
        </div>

        <div className="flex h-8 w-8 justify-center items-center gap-1 rounded-full hover:bg-[#e2e2e2] cursor-pointer">
          <img rel="icon" src="assets/fb.avif" className="w-5 h-5"></img>
        </div>

        <div className="flex h-8 w-8 justify-center items-center gap-1 rounded-full hover:bg-[#e2e2e2] cursor-pointer">
          <img rel="icon" src="assets/X.avif" className="w-4 h-4"></img>
        </div>

        <div className="flex h-8 w-8 justify-center items-center gap-1 rounded-full hover:bg-[#e2e2e2] cursor-pointer">
            <img rel="icon" src="assets/insta.avif" className="w-4 h-4"></img>
        </div>
      </div>
    </div>
  )
}

export default FooterEnd