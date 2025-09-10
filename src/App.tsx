import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderPrimary from './Components/HeaderPrimary/HeaderPrimary'
import CardGenerator from './Components/Cards/CardGenerator/CardGenerator'
import Footer from './Components/Footer/Footer'
import CardDetails from './Components/CardDetails/CardDetails';

interface Card {
  title: string;
  tagLine: string;
}

function App() {
  // Explicitly typed cards array
  const cards: Card[] = [
    { title: 'Lahore', tagLine: 'Popular homes in Lahore' },
    { title: 'Islamabad', tagLine: 'Available in Islamabad this weekend' },
    { title: 'Karachi', tagLine: 'Stay in Karachi' },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative w-full min-h-screen flex flex-col items-center overflow-hidden scrollbar-none">
              <HeaderPrimary />
              <main className="w-screen pt-28 md:pt-52 px-6 pb-4 flex flex-col
              overflow-hidden items-center justify-center">
                {cards.map((card) => (
                  <CardGenerator key={card.title} title={card.title} tagLine={card.tagLine} />
                ))}
              </main>
              <footer className="w-full h-fit bg-[#f8f8f8] pt-6 px-6 md:px-8 pb-4 flex-1 overflow-y-auto justify-center items-center">
                <Footer />
              </footer>
            </div>
          }
        />
        <Route path="/cardDetails/:title/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App