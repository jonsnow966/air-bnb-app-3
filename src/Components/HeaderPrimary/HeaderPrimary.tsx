import HeaderSecondary from "./HeaderSecondary/HeaderSecondary"
import SearchBar from "./SearchBar/SearchBar"

function HeaderPrimary() {
  return (
    <div className="bg-[#f8f8f8] w-full h-fit p-0 md:pb-5 fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
        <HeaderSecondary/>
        <SearchBar/>
    </div>  
  )
}

export default HeaderPrimary