import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./pages/Home.jsx";
import './App.css'
import StudentDashboard from './pages/StudentDashboard.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <StudentDashboard/>
    </>
  )
}

export default App
