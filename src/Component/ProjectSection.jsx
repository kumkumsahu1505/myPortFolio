import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "FitClub Gym Website",
    description:
      "A modern fitness website with responsive design, smooth animations, and membership features.",
    image:
      "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "https://your-fitclub-live-link.com",
    githubLink: "https://github.com/yourusername/fitclub",
  },
  {
    title: "Apple Vision",
    description:
      "A sleek product showcase inspired by Apple Vision Pro with smooth animations and 3D effects.",
    image:
      "https://images.unsplash.com/photo-1696287578888-bf4a3f6a40f1?auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    liveLink: "https://your-apple-vision-live-link.com",
    githubLink: "https://github.com/yourusername/apple-vision",
  },
  {
    title: "Employee Management System",
    description:
      "A web application to manage employees, attendance, and reports with authentication.",
    image:
      "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    liveLink: "https://your-ems-live-link.com",
    githubLink: "https://github.com/yourusername/employee-management-system",
  },
  {
    title: "Duo Studio",
    description:
      "A portfolio and branding website for a creative agency with modern layouts and animations.",
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "GSAP", "Tailwind CSS"],
    liveLink: "https://your-duo-studio-live-link.com",
    githubLink: "https://github.com/yourusername/duo-studio",
  },
  {
    title: "URL Shortener",
    description:
      "A simple and fast tool to shorten long URLs with analytics tracking.",
    image:
      "https://images.unsplash.com/photo-1590595903436-4d2b91c6ed0c?auto=format&fit=crop&w=1470&q=80",
    tags: ["Node.js", "Express", "MongoDB"],
    liveLink: "https://your-url-shortener-live-link.com",
    githubLink: "https://github.com/yourusername/url-shortener",
  },
  {
    title: "CRUD Operation App",
    description:
      "A basic CRUD application to create, read, update, and delete data using a REST API.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Node.js", "Express"],
    liveLink: "https://your-crud-app-live-link.com",
    githubLink: "https://github.com/yourusername/crud-operation",
  },
];

const ProjectSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white" id="projects">
      <div className="mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold uppercase tracking-wider relative inline-block">
            My Projects
            <span className="block h-1 w-20 bg-yellow-500 mx-auto mt-3 rounded-full"></span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-transform transform hover:-translate-y-2"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-yellow-500 text-black px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Links */}
                <div className="flex gap-4 text-lg">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
