import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import Certifications from "./pages/Certifications.jsx";
import Partners from "./pages/Partener.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<Index />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
