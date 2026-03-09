import { FaWrench, FaBolt, FaBroom, FaSnowflake, FaBook } from "react-icons/fa";

function Services() {

  const services = [
    { name: "Plumber", icon: <FaWrench /> },
    { name: "Electrician", icon: <FaBolt /> },
    { name: "Cleaner", icon: <FaBroom /> },
    { name: "AC Repair", icon: <FaSnowflake /> },
    { name: "Tutor", icon: <FaBook /> }
  ];

  return (
    <div className="services">

      <h1>Service Categories</h1>

      <p className="services-subtitle">
        Choose from a variety of trusted local services
      </p>

      <div className="service-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.name}</h3>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Services;