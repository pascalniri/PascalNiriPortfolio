import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About"
import Services from "./components/Services";
import { useEffect } from "react";
import { initGA, trackPageView } from "./analytics";



function App() {

  const location = useLocation();

  useEffect(() => {
    initGA();
    trackPageView(window.location.pathname);
  }, [])

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location])
  
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
