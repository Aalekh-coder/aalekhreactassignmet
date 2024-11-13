import Explore from "./components/explore";
import Faq from "./components/faq";
import GetStarted from "./components/getStarted";
import Hero from "./components/hero";
import Influaner from "./components/influaner";
import Monetization from "./components/monetization";
import Navbar from "./components/navbar";


const App = () => {
  return (
    <div className="bg-zinc-950 ">
      <Navbar />
      <Hero />
       <Explore />
      <Monetization />
      <Influaner />
      <GetStarted />
      <Faq />
    </div>
  )
}

export default App