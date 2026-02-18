import Home from "./pages/Home.jsx";
import './App.css'
import StudentDashboard from './pages/StudentDashBoard.jsx';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentProfile from "./pages/StudentProfile.jsx";

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/StudentDashboard' element={<StudentDashboard />} />
        <Route path='/StudentProfile' element={<StudentProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
