import lhrData from '../../../JSON/Lahore.json'
import isbData from '../../../JSON/Islamabad.json'
import khiData from '../../../JSON/Karachi.json'
import { useRef, useEffect} from 'react'
 

interface Property {
  id: number;
  cardName: string;
  text: string;
  rating: string;
  pic: string;
}

interface CardGeneratorProps{
  title: string
  tagLine: string
}

const CardGenerator: React.FC<CardGeneratorProps> = ({ title, tagLine }) => {
  let cardData;

  if(title == 'Lahore')
    cardData = lhrData as Property[];
  else if(title == 'Islamabad')
    cardData = isbData as Property[];
  else if(title == 'Karachi')
    cardData = khiData as Property[];
  else
    cardData = lhrData as Property[];
  
  console.log(cardData);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const leftBtnRef = useRef<HTMLButtonElement>(null);
  const rightBtnRef = useRef<HTMLButtonElement>(null);

  const updateBtnState = ()=>{
    const containerRef = scrollContainerRef.current;

    if(!containerRef) return;

    const scrollLeft = containerRef.scrollLeft;
    const scrollWidth = containerRef.scrollWidth;
    const clientWidth = containerRef.clientWidth;

    // Disable left button at start
    if(leftBtnRef.current)
      leftBtnRef.current.disabled = scrollLeft <= 0;
    // Disable right button at end
    if(rightBtnRef.current)
      rightBtnRef.current.disabled = scrollLeft + clientWidth >= scrollWidth -2;

  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      try{
          scrollContainerRef.current.scrollBy({ left: -220, behavior: 'smooth' });
          updateBtnState();      
      } catch(error){
        console.error('ScrollBy Error:', error);
      }
    }
    else{
      console.warn('Scroll container ref is not assigned!');
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      try{
          scrollContainerRef.current.scrollBy({ left: 220, behavior: 'smooth' });
          updateBtnState();
      }catch(error){
        console.error('ScrollBy Error:', error);
      }
    }
    else{
      console.warn('Scroll container ref is not assigned!');
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateBtnState);
      window.addEventListener('resize', updateBtnState);
      updateBtnState(); // Initial check
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', updateBtnState);
        window.removeEventListener('resize', updateBtnState);
      }
    };
  }, []);


  return (
    <div className="flex flex-col mt-5 w-screen xl:w-[85.5%] relative overflow-hidden pl-5 md:px-10 ">
      <div className=" h-fit flex items-center mb-2 pl-2 md:pl-6 pr-3 md:pr-1 gap-1 justify-between">
        
        <div className='flex items-center gap-1'>
          <p className="text-black text-nowrap font-medium
          text-md xxs:text-xl pb-1 cursor-pointer">{tagLine}</p>
          <img rel="icon" src='assets/right-arrow.avif' className="w-2 h-2 xxs:w-3 xxs:h-3"></img>
        </div>
        
        <div className='hidden xxs:flex w-fit h-fit items-center gap-1'>
          <button className="flex h-6 w-6 items-center gap-1 rounded-full hover:bg-[#dbdbdb] justify-center
          text-[16px] cursor-pointer opacity-100 border-gray-500 border-[1px] hover:border-none hover:opacity-100
          disabled:opacity-15 disabled:cursor-not-allowed transition-all duration-300"
          onClick={scrollLeft}
          ref={leftBtnRef}
          >
            
            <img rel="icon" src="assets/left-arrow.avif" className="w-[10px] h-[10px]"></img>

          </button>

          <button className="flex h-6 w-6 items-center gap-1 rounded-full hover:bg-[#dbdbdb] justify-center
          text-[16px] cursor-pointer opacity-100 border-gray-500 border-[1px] hover:border-none hover:opacity-100
          disabled:opacity-15 disabled:cursor-not-allowed transition-all duration-300"
          onClick={scrollRight}
          ref={rightBtnRef}
          >

            <img rel="icon" src="assets/right-arrow.avif" className="w-[10px] h-[10px]"></img>
          </button>
        </div>
      </div>

      <div className='h-fit pl-1 flex flex-nowrap gap-4 ml-2 md:ml-5
      overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-none'
      ref={scrollContainerRef}
      >
        {cardData.map(item => (
              <div key={item.id} className='w-[200px] h-[250px] md:w-[200px] md:h-[250px]
              cursor-pointer flex shrink-0 flex-col'>
                <img rel='picture' src={`assets/${item.pic}`} className='w-full h-4/5 rounded-3xl object-cover'></img>
                
                <p className='text-black font-medium '>{item.cardName}</p>

                <p className='flex items-center text-xs text-gray-500'>
                  
                  <span className='mr-0.5 mb-0.5 cursor-text'>{item.text}</span>

                  <span className='mx-1 mb-[8px]'>.</span>

                  <img rel='icon' src='assets/star-16.avif' className='w-2.5 h-auto '></img>

                  <span className='ml-0.5'>{item.rating}</span>
                </p>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default CardGenerator