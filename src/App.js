import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <div class="bg-[#7010a8]">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
