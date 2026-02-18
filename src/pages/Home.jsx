import { Link } from "react-router-dom";
import "../styles/Home.css";
import { testFunction } from "../utils/Home_logic";

function Home() {

  function handleClick() {
    const result = testFunction(5, 3);
    alert("JS works! Result = " + result);
  }
  return (
    <div className="container mt-5 text-center">
      <h1 className="home-title">React Setup Test</h1>
      <p className="text-muted">
        Testing JSX, CSS, Bootstrap, and JS
      </p>
      <button className="btn btn-success" onClick={handleClick}>
        Test Everything
      </button>
      <Link to="/StudentDashboard" className="btn btn-success">
         Student Dashboard
      </Link>
    </div>
  );
}
export default Home;