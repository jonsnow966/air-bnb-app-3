import lhrData from '../../../JSON/Lahore.json'
import isbData from '../../../JSON/Islamabad.json'
import khiData from '../../../JSON/Karachi.json'
 

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

  return (
    <div className="flex flex-col mt-3 w-fit justify-center items-center relative">
      <div className='flex flex-col gap-1'>
        <div className="h-10 flex items-center mb-4 pl-6 gap-1">

          <div className='flex items-center gap-1'>
            <p className="text-black font-medium text-xl pb-1 cursor-pointer">{tagLine}</p>
            <img rel="icon" src='assets/right-arrow.avif' className="w-3 h-3"></img>
          </div>
          
          <div className='hidden xs:flex w-fit h-fit items-center gap-1 absolute right-5 xl:right-20'>
            <div className="flex h-6 w-6 items-center gap-1 rounded-full hover:bg-[#dbdbdb] justify-center
            text-[16px] cursor-pointer opacity-15 border-gray-500 border-[1px] hover:border-none hover:opacity-100">
              <img rel="icon" src="assets/left-arrow.avif" className="w-[10px] h-[10px]"></img>

            </div>

            <div className="flex h-6 w-6 items-center gap-1 rounded-full hover:bg-[#dbdbdb] justify-center
            text-[16px] cursor-pointer opacity-15 border-gray-500 border-[1px] hover:border-none hover:opacity-100">

              <img rel="icon" src="assets/right-arrow.avif" className="w-[10px] h-[10px]"></img>

            </div>
          </div>
        </div>

        <div className='w-screen h-fit xl:w-fit pl-5 pr-20 grid grid-cols-[200px_200px_200px_200px_200px_200px_200px] gap-4 overflow-auto scrollbar-none'>
          
          {cardData.map(item => (
                <div key={item.id} className='w-[200px] h-[250px] cursor-pointer'>
                  <img rel='picture' src={`assets/${item.pic}`} className='w-full h-4/5 rounded-3xl object-cover'></img>
                  
                  <p className='text-black font-medium'>{item.cardName}</p>

                  <p className='flex items-center text-xs text-gray-500'>
                    
                    <span className='mr-0.5 mb-0.5 cursor-text'>{item.text}</span>

                    <span className='mx-1 mb-[8px]'>.</span>

                    <img rel='icon' src='assets/star-16.avif' className='w-2.5 h-2.5'></img>

                    <span className='ml-0.5'>{item.rating}</span>
                  </p>
                </div>
              )
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CardGenerator