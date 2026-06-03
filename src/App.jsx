import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";
import Education from "./components/Education";
import Educardpage from "./components/Educardpage";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-[#f6f2ef]">
      <div className="px-8">
        <Navbar />
        <HeroSection />
      </div>
      <Educardpage/>
      <Project />
      <Education />
      <Skills/>
      

      
    </div>
  );
}

export default App;
