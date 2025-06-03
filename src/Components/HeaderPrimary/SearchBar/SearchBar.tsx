import './SearchBar.css'
import { useState } from 'react';

function SearchBar() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  return (
    <div className="opacity-0 md:opacity-100 flex transition-all duration-400 w-fit bg-slate-50 rounded-full shadow-lg cursor-pointer items-center">

      <div id="search_bar" className="w-64 py-2 h-full rounded-full bg-slate-50 flex flex-col pl-8 justify-center hover:bg-slate-200">
        <p className="text-black text-sm">Where</p>
        <input placeholder="Search Destintions" className="bg-inherit placeholder-gray-400 font-normal rounded-full rounded-l-none w-11/12 text-black pr-2 outline-none"/>
      </div>

      <div id="first" className="w-px h-8 bg-slate-300" style={{ opacity: isHovering ? 0 : 1 }}></div>
      
      <div id="check_in_btn" className="w-36 py-2 h-full rounded-full bg-slate-50 flex flex-col pl-8 justify-center hover:bg-slate-200"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className="text-black text-sm">Check-in</p>
        <p className="text-gray-400 text-base font-normal">Add Dates</p>
      </div>

      <div id='second' className="w-px h-8 bg-slate-300 "
      style={{ opacity: isHovering2 ? 0 : 1 }}></div>

      <div id="check_out_btn" className="w-36 py-2 h-full rounded-full  bg-slate-50 flex flex-col pl-8 justify-center hover:bg-slate-200"
        onMouseEnter={() => setIsHovering2(true)}
        onMouseLeave={() => setIsHovering2(false)}
      >
        <p className="text-black text-sm">Check-out</p>
        <p className="text-gray-400 text-base font-normal">Add Dates</p>
      </div>

      <div id="third" className="w-px h-8 bg-slate-300" style={{ opacity: isHovering3 ? 0 : 1 }}></div>

      <div id="add_guests_btn" className="w-64 h-full rounded-full py-2 bg-slate-50 flex pl-8 gap-20 hover:bg-slate-200"
        onMouseEnter={() => setIsHovering3(true)}
        onMouseLeave={() => setIsHovering3(false)}
      >
        <div className=''>
          <p className="text-black text-sm">Who</p>
        
          <p className="text-gray-400 text-base font-normal">Add Guests</p>
        </div>
        
        <div className="bg-red-500  w-12 h-12 rounded-full flex items-center justify-center z-10 hover:bg-red-600">     
          <img rel="icon" src="assets/search-icon.png" className="w-5"></img>
        </div>
      </div>
    </div>
  )
}

export default SearchBar