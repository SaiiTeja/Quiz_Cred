import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Certifications from "./pages/Certifications.jsx";
import Partners from "./pages/Partener.jsx";

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
      </Routes>
    </>
  );
}

export default App;
