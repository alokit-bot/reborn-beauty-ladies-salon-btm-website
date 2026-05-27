import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/site/Navigation";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Gallery from "@/components/site/Gallery";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Home = () => {
  return (
    <div className="bg-[#FFF8E7] text-[#2D2D2D] min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
