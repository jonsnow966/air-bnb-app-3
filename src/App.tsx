import HeaderPrimary from './Components/HeaderPrimary/HeaderPrimary'
import CardGenerator from './Components/Cards/CardGenerator/CardGenerator'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">

      <HeaderPrimary />

      <main className="w-full pt-32 md:pt-56 px-6 pb-4 flex flex-col overflow-y-auto justify-center">

        <CardGenerator title={'Lahore'} tagLine={'Popular homes in Lahore'}/>
        <CardGenerator title={'Islamabad'} tagLine={'Available in Islamabad this weekend'}/>
        <CardGenerator title={'Karachi'} tagLine={'Stay in Karachi'}/>
        
      </main>

      <footer className="w-full h-fit bg-[#f8f8f8] pt-6 px-8 pb-4 flex-1 overflow-y-auto justify-center items-center">
        <Footer />
      </footer>

    </div>
  )
}

export default App