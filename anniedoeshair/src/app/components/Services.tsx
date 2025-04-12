export function Services() {
    const services = [
      { title: "Haircuts", desc: "Trendy and classic cuts for all hair types." },
      { title: "Coloring", desc: "Highlights, balayage, and full color services." },
      { title: "Styling", desc: "Updos, blowouts, and event styling." },
    ];
  
    return (
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-semibold mb-10">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-lg p-6 transition hover:shadow-xl"
            >
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  