import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Services from "./components/Services";
import { useEffect } from "react";
import { initGA, trackPageView } from "./analytics";

// This component must be inside BrowserRouter to use useLocation
function TrackPageViews() {
  const location = useLocation();

  useEffect(() => {
    initGA(); // Initialize GA
    trackPageView(location.pathname); // Track initial page
  }, []);

  useEffect(() => {
    trackPageView(location.pathname); // Track subsequent navigation
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <BrowserRouter>
      {/* Tracking component must be inside BrowserRouter */}
      <TrackPageViews />
      
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