import React from "react";
import image from "../assets/profile.jpg"; 
import resume from "../assets/resume.jpg";
import resumepdf from "../assets/KumkumSahuResume.pdf.pdf";
import { IoMdDownload } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";

const skills = [
  { name: "HTML", percentage: 80 },
  { name: "CSS", percentage: 85 },
  { name: "JavaScript", percentage: 70 },
  { name: "React.js", percentage: 85 },
  { name: "Tailwind CSS", percentage: 75 },
  { name: "SQL", percentage: 75 },
  { name: "MongoDB", percentage: 60 },
  { name: "Java", percentage: 85 },
];

const About = () => {
  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
      id="about"
    >
      <div className="mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold uppercase tracking-wider relative inline-block">
            About Me
            <span className="block h-1 w-20 bg-yellow-500 mx-auto mt-3 rounded-full"></span>
          </h2>
        </div>

        {/* About Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={image}
              alt="Profile"
              className="w-72 h-72 object-cover rounded-xl shadow-lg shadow-yellow-500/20 border-4 border-yellow-500"
            />
            <h3 className="text-center text-3xl font-semibold mb-5 mt-5 text-yellow-500">kumkum sahu</h3>
          </div>

          {/* About Text */}
          <div className="flex-1">
            <h3 className="text-3xl font-semibold mb-5 text-yellow-500">
              Full Stack Developer
            </h3>
            <p className="mb-4 text-gray-300 leading-relaxed">
              I specialize in creating responsive, user-friendly websites and
              applications using modern technologies. My passion for coding and
              problem-solving allows me to deliver high-quality solutions that
              meet client needs.
            </p>
            <p className="mb-8 text-gray-300 leading-relaxed">
              With a strong foundation in both front-end and back-end
              development, I can handle all aspects of web development from
              concept to deployment.
            </p>

            {/* Skills */}
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1 text-sm font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-3 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* portFolio */}
           <div className="flex justify-center items-center w-[80%] mx-auto my-12 ">
  <div className="rounded-2xl p-6 flex flex-col items-center md:flex-row gap-6 md:gap-52">
    
    {/* Resume Image Preview */}
    <div className="w-40 h-52 overflow-hidden rounded-lg">
      <img 
        src={resume} 
        alt="Resume preview" 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Resume Buttons */}
    <div className="flex flex-col gap-3 text-center ">
      <h2 className="text-xl font-semibold text-white">My Resume</h2>
      <p className="text-gray-300 text-sm">You can view or download my resume below.</p>
      
      <div className="flex gap-4 mt-2">
        <a 
          href={resumepdf} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700  flex items-center gap-2"
        >
          View Resume <FaRegEye className="animate-pulse"/>
        </a>
        <a 
          href={resumepdf} 
          download 
          className="px-5 py-2 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700  flex items-center gap-2"
        >
          Download <IoMdDownload className="animate-bounce"/> 
        </a>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default About;
