import React from 'react';

import { Typewriter } from "react-simple-typewriter";
const About = () => {
const projects = [
  {
    title: "AssignMates",
    image: "https://i.ibb.co/Qj6FQCM9/assignmate.png",
    link: "https://my-online-assignment-project.web.app/",
  },
  {
    title: "FreeLanceFusion",
    image: "https://i.ibb.co/fGkmKB0z/freelance.png",
    link: "https://freelance-application-5ac09.web.app/",
  },
  {
    title: "Axit Project",
    image: "https://i.ibb.co/nqx4NBzq/AXiT.png",
    link: "https://amenagithub678.github.io/BooStrap-Landing-PorJct1/",
  },
];
    return (
      <>
      {/* About Section */}
      <div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-10">
        {/* Left Side */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-bold mb-4">Amena Akter</h1>

          <p className="text-xl text-green-400 mb-3">
            <Typewriter
              words={["MERN Stack Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className="text-gray-300 mb-6 max-w-lg">
            I specialize in building dynamic and responsive Mern-stack web
            applications using MongoDB, Express, React, and Node.js. I'm
            passionate about clean code, intuitive UI/UX, and continuous
            learning.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-green-500 hover:bg-green-600 hover:text-white text-green-400 font-semibold px-6 py-3 rounded-lg transition duration-200"
            >
              See Resume
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co/27vRv1Cb/11a54910-bc29-4f41-a366-3b31bc3fbcd4.jpg"
            alt="Amena Akter"
            className="w-40 h-40 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-green-500 shadow-xl"
          />
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="bg-[#0a0a0a] py-16 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-2">Recent Work</h2>
        <p className="text-2xl text-yellow-400 mb-6">My Portfolio</p>
        <p className="text-sm text-gray-400 mb-10">Total Projects: {projects.length}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transform transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-red-400 mt-2 hover:underline">
                  See More →
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/projects"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition duration-200"
          >
            See All Projects
          </a>
        </div>
      </div>
    </>
    );
};

export default About;