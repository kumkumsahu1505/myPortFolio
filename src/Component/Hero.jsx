import react from 'react'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-900 text-white min-h-screen flex items-center"
    >
      <div className="mx-auto px-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-indigo-400">Kumkum Sahu</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-indigo-300 font-semibold mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            I build exceptional digital experiences that are fast, accessible,
            and visually appealing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
             to="/projects"
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 transition"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-indigo-400 text-indigo-400 rounded-lg font-medium hover:bg-indigo-400 hover:text-white transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
