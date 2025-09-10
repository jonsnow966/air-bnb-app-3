import { useState, useEffect, useRef } from "react"
import Navbar from "../../Navbar/Navbar";
import PopUp from "../../PopUp/PopUp";

function HeaderSecondary(){

  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleVisibility = () =>{
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    const handleClickOutside = (event : MouseEvent) => {
      console.log('divRef:', divRef.current, 'buttonRef:', buttonRef.current);
      if (
        divRef.current &&
        !divRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const navButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleNavbar = () =>{
    setIsNavOpen(!isNavOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event : MouseEvent) => {
      console.log('navRef:', navRef.current, 'navButtonRef:', navButtonRef.current);
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        navButtonRef.current &&
        !navButtonRef.current.contains(event.target as Node)
      ) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return(
    <div className="w-full h-fit flex items-center relative justify-between pt-1 sm:py-3
    flex-col xs:flex-row">
      <div className="w-32 h-fit cursor-pointer">
        <img rel="icon" src='assets/airbnb_logo.avif' className="w-[100px] flex ml-2 xs:ml-0"/>
      </div>

      <div className="w-0 h-full lg:ml-14 justify-center items-center gap-2 hidden sm:flex 
      md:w-2/4 opacity-0 md:opacity-100 transition-all duration-600 ease-in-out">
        
        <div className="text-gray-500 h-16 w-[115px] rounded-none flex items-center 
        cursor-pointer gap-0 hover:text-black hover:font-medium hover:border-b-2 hover:border-black
        relative">
          
          <img rel="icon" typeof="image" src="assets/home_icon.avif" className="w-15 hover:w-16 transition-all"></img>
            <p className="z-10 absolute right-[3px] [850]:right-[10px]">
              Homes
            </p>
        </div>

        <div className="text-gray-500 h-16 w-[145px] rounded-none flex items-center 
        cursor-pointer gap-0 hover:text-black hover:font-medium hover:border-b-2 hover:border-black
        relative">
        
          <img rel="icon" src="assets/experience_icon.avif" className="w-15 hover:w-16 transition-all"></img>
          <p className="z-10 absolute right-[4px] [850]:right-[10px]">
              Experiences
          </p>
        </div>
        
        <div className="text-gray-500 h-16 w-[125px] rounded-none flex items-center 
        cursor-pointer gap-0 hover:text-black hover:font-medium hover:border-b-2 hover:border-black
        relative">
          <img rel="icon" src="assets/services_icon.avif" className="w-15 hover:w-16 transition-all"></img>
          <p className="z-10 absolute right-[4px] [850]:right-[10px]">
              Services
          </p>
        </div>
      </div>
      
      <div className="flex w-fit h-20 m-0 items-center gap-2">
        <button className="hidden opacity-0 sm:flex md:opacity-100 transition-all duration-600 ease-in-out items-center justify-center bg-inherit w-32 h-10 text-sm text-wrap text-black rounded-3xl border-none outline-none hover:bg-[#c7c7c7] cursor-pointer">
          Become a host
        </button>

        <div className="flex opacity-100 transition-all duration-400 md:opacity-0 md:w-0 bg-[#e7e7e7] w-10 h-10 text-sm text-wrap text-black rounded-3xl items-center justify-center border-none outline-none hover:bg-[#c7c7c7] cursor-pointer">
          <img rel="icon" src="assets/search_black.avif" className="w-4"></img>
        </div>

        <div className="bg-[#e7e7e7] w-10 h-10 transition-all duration-600 ease-in-out text-sm text-wrap text-black rounded-3xl flex items-center justify-center border-none outline-none hover:bg-[#c7c7c7] cursor-pointer">
          <img rel="icon" src="assets/globe.avif" className="w-4"></img>
        </div>

        <button className="bg-[#e7e7e7] w-10 h-10 transition-all duration-600 
        ease-in-out text-sm text-wrap text-black rounded-3xl cursor-pointer
        flex md:hidden 
        items-center justify-center border-none outline-none hover:bg-[#c7c7c7]"
        onClick={toggleNavbar}
        ref={navButtonRef}>
          <img rel="icon" src="assets/hamburger.avif" className="w-4"></img>
        </button>

        <div className={`fixed top-[110px] right-0 z-100 
        flex items-center justify-center overflow-hidden equal-shadow
        transition-all duration-300 ease-in-out
        h-screen bg-[#f0f0f0e8]
        ${
        isNavOpen ? 'w-screen xs:w-[350px] sm:w-[400px] md:hidden' : 'w-[1px]'
        }`}
        ref={navRef}>
          <Navbar/>
        </div>

        <button className="bg-[#e7e7e7] w-10 h-10 transition-all duration-600 
        ease-in-out text-sm text-wrap text-black rounded-3xl cursor-pointer
        hidden md:flex 
        items-center justify-center border-none outline-none hover:bg-[#c7c7c7]"
        onClick={toggleVisibility}
        ref={buttonRef}
        >
          <img rel="icon" src="assets/hamburger.avif" className="w-4"></img>
        </button>

        <div className={`fixed right-[30px] top-[90px] w-[280px] z-100 
         h-fit flex items-center justify-center ${
          isVisible ? 'sm:hidden, md:flex' : 'hidden'
        }`}
        ref={divRef}
        >
          <PopUp />        
        </div>
      </div>
    </div>
  )
}

export default HeaderSecondary