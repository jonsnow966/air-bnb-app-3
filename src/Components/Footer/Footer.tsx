import FooterEnd from "./FooterEnd/FooterEnd"
import FooterMiddle from "./FooterMiddle/FooterMiddle"
import FooterStart from "./FooterStart/FooterStart"

function Footer() {
  return (
    <div className="bg-[#f8f8f8] h-fit flex flex-col py-2 md:pl-2 mt-3">

      <FooterStart/>
      <FooterMiddle/>
      <FooterEnd/>
      
    </div>
  )
}

export default Footer