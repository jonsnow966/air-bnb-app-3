import { useParams } from 'react-router-dom';
import lhrData from '../../JSON/Lahore.json';
import isbData from '../../JSON/Islamabad.json';
import khiData from '../../JSON/Karachi.json';

interface Property {
  id: number;
  cardName: string;
  text: string;
  rating: string;
  pic: string;
}

const CardDetails: React.FC = () => {
  const { title, id } = useParams<{ title: string; id: string }>();
  let cardData: Property[];

  if (title === 'Lahore') {
    cardData = lhrData as Property[];
  } else if (title === 'Islamabad') {
    cardData = isbData as Property[];
  } else if (title === 'Karachi') {
    cardData = khiData as Property[];
  } else {
    cardData = lhrData as Property[];
  }

  const selectedCard = cardData.find((item) => item.id === Number(id));

  if (!selectedCard) {
    return <div>Card not found</div>;
  }

  return (
    <div className="bg-red-300 w-[200px] h-[250px] md:w-[200px] md:h-[250px] relative cursor-pointer flex shrink-0 flex-col">
      <img
        rel="picture"
        src={`assets/1.avif`}
        className="w-full h-4/5 rounded-3xl object-cover"
      />
      <p className="text-black font-medium">{selectedCard.cardName}</p>
      <p className="flex items-center text-xs text-gray-500">
        <span className="mr-0.5 mb-0.5 cursor-text">{selectedCard.text}</span>
        <span className="mx-1 mb-[8px]">.</span>
        <img rel='icon' src='assets/star-16.avif' className='w-2.5 h-auto '></img>
        <span className="ml-0.5">{selectedCard.rating}</span>
      </p>
    </div>
  );
};

export default CardDetails;