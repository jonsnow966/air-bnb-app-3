function FooterStart() {
  return (
    <div className="w-[100%] h-fit relative top-0">
      <p className="text-black cursor-text text-2xl mb-4 md:m-2  font-medium">Inspiration for future getaways</p> 

      <div className="flex gap-2 text-[12px] sm:text-lg md:text-xl md:gap-5 border-gray-300 border-b-[1px]">
        <div className="p-2 text-gray-500 cursor-pointer font-normal hover:text-black hover:border-black hover:border-b-2">
          Unique stays
        </div>

        <div className="p-2 text-gray-500 cursor-pointer font-normal hover:text-black hover:border-black hover:border-b-2">
          Categories
        </div>

        <div className="p-2 text-gray-500 cursor-pointer font-normal hover:text-black hover:border-black hover:border-b-2">
          Travel tips & inspiration
        </div>

        <div className="p-2 text-gray-500 cursor-pointer font-normal hover:text-black hover:border-black hover:border-b-2">
          Airbnb-friendly apartments
        </div>
      </div>

      <div  className="flex gap-1 md:gap-3">
        <div className="grid grid-cols-3 xs:grid-cols-4 md:grid-cols-6 text-nowrap 
        text-[12px] xs:text-[14px] sm:text-[14px] md:text-[16px] xl:text-[18px] 
        gap-y-7 gap-x-13 md:gap-x-14 lg:gap-x-16 xl:gap-x-20
        m-2 pt-5 cursor-pointer">

          <div className="leading-[1.5]">
            <p className="text-black font-medium">Cabins</p>
            <p className="text-gray-500 hover:text-black">United States</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium">Treehouses</p>
            <p className="text-gray-500 hover:text-black">United States</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium">Glamping</p>
            <p className="text-gray-500 hover:text-black">United States</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium">Tiny Houses</p>
            <p className="text-gray-500 hover:text-black">United States</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium">Beach Houses</p>
            <p className="text-gray-500 hover:text-black">United States</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium text-wrap">Campers and RVs</p>
            <p className="text-gray-500 hover:text-black">United States</p>
          </div>

          <div className="leading-.5">
            <p className="text-black font-medium">Lakehouses</p>
            <p className="text-gray-500 hover:text-black">United States</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium">Yurt Rentals</p>
            <p className="text-gray-500 hover:text-black">United States</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium">Yurt Rentals</p>
            <p className="text-gray-500 hover:text-black">United Kingdom</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium">Castle Rentals</p>
            <p className="text-gray-500 hover:text-black">United States</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium">Houseboats</p>
            <p className="text-gray-500 hover:text-black">United States</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium text-wrap">Holiday Caravans</p>
            <p className="text-gray-500 hover:text-black">United States</p>
          </div>

          <div className="leading-.5">
            <p className="text-black font-medium text-wrap">Private Island Rentals</p>
            <p className="text-gray-500 hover:text-black">United States</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium">Farm Houses</p>
            <p className="text-gray-500 hover:text-black">United States</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium">Farm Cottages</p>
            <p className="text-gray-500 hover:text-black">United Kingdom</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium">Cabin Rentals</p>
            <p className="text-gray-500 hover:text-black">Australia</p>
          </div>
          <div className="leading-.5">
            <p className="text-black font-medium">Luxury Cabins</p>
            <p className="text-gray-500 hover:text-black">United Kingdom</p>
          </div>
          <div className="leading-.5 flex items-center h-fit gap-1">
            <p className="text-black font-medium hover:underline hover:underline-offset-1">Show more</p>
            <img rel="icon" src="assets/arrow-down.avif" className="w-2 h-2 md:w-3 md:h-3 mt-[3px]"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterStart