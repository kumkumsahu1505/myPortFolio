import React from "react";
import { FaCode, FaMobileAlt, FaServer, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-yellow-500 text-5xl mb-4" />,
    title: "Web Development",
    description:
      "Custom website development tailored to your business needs using the latest technologies and frameworks.",
  },
  {
    icon: <FaLaptopCode className="text-yellow-500 text-5xl mb-4" />,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and visually engaging user interfaces using React, Tailwind CSS, and other cutting-edge frontend technologies.",
  },
  {
    icon: <FaMobileAlt className="text-yellow-500 text-5xl mb-4" />,
    title: "Responsive Design",
    description:
      "Websites that look great and function perfectly on all devices from desktop to mobile.",
  },
  {
    icon: <FaServer className="text-yellow-500 text-5xl mb-4" />,
    title: "Backend Development",
    description:
      "Robust server-side solutions with databases, APIs, and authentication systems.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-900 text-white" id="services">
      <div className="mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold uppercase tracking-wider relative inline-block">
            My Services
            <span className="block h-1 w-20 bg-yellow-500 mx-auto mt-3 rounded-full"></span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-yellow-500/20 transition-transform transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
