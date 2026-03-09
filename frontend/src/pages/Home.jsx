import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/services">Services</Link>
      </nav>

      <div className="container">
        <h1>LocalConnect</h1>
        <p>Find trusted local service providers near you.</p>
      </div>

    </div>
  );
}

export default Home;