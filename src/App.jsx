import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Certifications from "./pages/Certifications.jsx";
import Partners from "./pages/Partener.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
