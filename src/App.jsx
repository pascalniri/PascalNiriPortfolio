import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About"
function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
