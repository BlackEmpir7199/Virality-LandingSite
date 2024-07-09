import FeaturesSection from "./components/FeaturesSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <Navbar/>
    <div className="max-w-7-xl mx-auto pt-20 px-6">
    <HeroSection/>
    <FeaturesSection/>
    </div>
    </>
  )
}

export default App
