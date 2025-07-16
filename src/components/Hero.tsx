import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";


const openCV = () => {
  window.open("/cv.pdf");
};

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-24 rotate-3d"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 float-animation"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 pulse-3d"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="slide-in-up">
          <div className="flex">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 transform-3d">
                <span className="block text-gradient">Creative</span>
                <span className="block">Developer</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Crafting exceptional digital experiences with modern
                technologies and creative solutions
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a href="#projects">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:rotate-1 glow-effect">
                    View My Work
                  </button>
                </a>
                <button
                  onClick={openCV}
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
                >
                  View CV
                </button>
              </div>
            </div>

            <img
              src="../public/images/profile.jpg"
              alt="Profile"
              className="w-60 h-60 rounded-full object-cover border-4 border-purple-500 shadow-lg mb-6 spin-3d"
            />
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <Github size={24} />
            </a>
            <a
              href="https://github.com/siddiqur2002"
              className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
