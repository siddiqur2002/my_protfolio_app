import React from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: <Palette size={24} />,
      title: 'Creative Design',
      description: 'Designing beautiful and intuitive user interfaces'
    },
    {
      icon: <Rocket size={24} />,
      title: 'Performance',
      description: 'Optimizing for speed and exceptional user experience'
    },
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I’m <span className="bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent font-bold">MD. SIDDIQUR RAHMAN</span>, a passionate and dedicated web developer focused on building clean, user-friendly, and functional web applications. I enjoy turning complex problems into simple, beautiful solutions. With skills in both frontend and backend development, I’m always eager to learn new technologies and take on challenging projects that help businesses and ideas come to life online.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or mentoring aspiring developers. I believe in 
              continuous learning and staying ahead of the curve in this ever-evolving field.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm">
                React
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm">
                TypeScript
              </span>
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm">
                JavaScript
              </span>
              <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm">
                Node.js
              </span>
              <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm">
                MongoDB
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm">
                MySQL
              </span>
            </div>
          </div>
          
          {/* 3D Moveable Technology Tags */}
          <div className="relative mt-12">
            <h4 className="text-white font-semibold mb-8 text-lg">Technologies I Master:</h4>
            <div className="flex flex-wrap gap-6 justify-start">
              {[
                { name: 'React', gradient: 'from-blue-500 to-cyan-500', delay: '0s' },
                { name: 'TypeScript', gradient: 'from-blue-600 to-indigo-600', delay: '0.1s' },
                { name: 'JavaScript', gradient: 'from-yellow-500 to-orange-500', delay: '0.2s' },
                { name: 'Node.js', gradient: 'from-green-500 to-emerald-600', delay: '0.3s' },
                { name: 'MongoDB', gradient: 'from-green-600 to-teal-600', delay: '0.4s' },
                { name: 'MySQL', gradient: 'from-orange-500 to-red-500', delay: '0.5s' },
                { name: 'PostgreSQL', gradient: 'from-blue-600 to-purple-600', delay: '0.6s' },
                { name: 'Redux', gradient: 'from-purple-500 to-violet-600', delay: '0.7s' },
                { name: 'Stripe', gradient: 'from-indigo-500 to-purple-500', delay: '0.8s' },
                { name: 'UI/UX', gradient: 'from-pink-500 to-rose-500', delay: '0.9s' }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="tech-tag-3d group cursor-pointer"
                  style={{
                    animationDelay: tech.delay,
                    animation: 'slideInUp 0.8s ease-out forwards'
                  }}
                >
                  <span 
                    className={`
                      relative inline-block bg-gradient-to-r ${tech.gradient} text-white 
                      px-6 py-3 rounded-2xl text-sm font-semibold
                      transform-3d transition-all duration-500 ease-out
                      hover:scale-110 hover:rotate-y-12 hover:rotate-x-6
                      hover:shadow-2xl hover:shadow-purple-500/25
                      border border-white/20 hover:border-white/40
                      backdrop-blur-sm
                      group-hover:z-10
                      before:absolute before:inset-0 before:bg-gradient-to-r before:${tech.gradient} 
                      before:rounded-2xl before:blur-lg before:opacity-0 before:transition-opacity 
                      before:duration-500 hover:before:opacity-30 before:-z-10
                    `}
                    onMouseEnter={(e) => {
                      const element = e.currentTarget;
                      element.style.transform = `
                        perspective(1000px) 
                        rotateY(${Math.random() * 30 - 15}deg) 
                        rotateX(${Math.random() * 20 - 10}deg) 
                        translateY(-${Math.random() * 10 + 5}px)
                        scale(1.1)
                      `;
                    }}
                    onMouseLeave={(e) => {
                      const element = e.currentTarget;
                      element.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)';
                    }}
                  >
                    {/* Floating animation particles */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    
                    {/* Text content */}
                    <span className="relative z-10 block transform group-hover:scale-105 transition-transform duration-300">
                      {tech.name}
                    </span>
                  </span>
                </div>
              ))}
            </div>
            
            {/* Interactive hint */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm italic opacity-70 hover:opacity-100 transition-opacity">
                ✨ Hover over the technologies to see them come alive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;