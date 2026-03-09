import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Navbar */}

      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/services">Services</Link>
      </nav>

      {/* Hero Section */}

      <div className="hero">

        <h1>Welcome to LocalConnect</h1>

        <p>
          Your one-stop platform to find trusted local service providers
          for your home needs.
        </p>

        <Link to="/services">
          <button>Explore Services</button>
        </Link>

      </div>

      {/* Features Section */}

      <div className="features">

        <h2>What We Provide</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Trusted Professionals</h3>
            <p>
              Connect with verified local service providers in your area.
            </p>
          </div>

          <div className="feature-card">
            <h3>Easy Booking</h3>
            <p>
              Book services quickly through our simple and user-friendly
              platform.
            </p>
          </div>

          <div className="feature-card">
            <h3>Multiple Services</h3>
            <p>
              Find electricians, plumbers, cleaners, tutors and many
              other services.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;