function Services() {

  const services = [
    "Plumber",
    "Electrician",
    "Cleaner",
    "AC Repair",
    "Tutor"
  ];

  return (
    <div className="services">

      <h1>Service Categories</h1>

      <div className="service-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service}</h3>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Services;