import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
    </>
  );
}

export default App;
