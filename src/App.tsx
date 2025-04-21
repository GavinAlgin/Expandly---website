import Projects from "./components/Projects";
import Services from "./components/Services";
import Testinomals from "./components/Testinomals";
import HeroPage from "./Pages/HeroPage";

function App() {

  return (
    <>
    <HeroPage />
    <Services />
    <Projects />
    <Testinomals />
    <div className="bg-black h-1/2 flex text-center">
      <p className="text-sm uppercase font-bold">Now available for hire</p>
      <h2 className="text-2xl font-semibold">Get in touch</h2>
      <form action=""></form>
    </div>
    </>
  )
}

export default App
