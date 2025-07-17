import React from 'react';
import { 
  Code, 
  Database, 
  Palette, 
  Smartphone, 
  Globe, 
  Server, 
  GitBranch, 
  Package, 
  Cloud, 
  TestTube, 
  Figma,
  Layers,
  Zap,
  Shield,
  Cpu,
  Monitor
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Monitor size={32} />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { 
          name: 'React', 
          level: 95, 
          icon: <Code size={24} />,
          color: 'from-blue-400 to-blue-600'
        },
        { 
          name: 'TypeScript', 
          level: 80, 
          icon: <Layers size={24} />,
          color: 'from-blue-500 to-indigo-600'
        },
        { 
          name: 'JavaScript', 
          level: 90, 
          icon: <Zap size={24} />,
          color: 'from-yellow-400 to-orange-500'
        },
        { 
          name: 'React Fiber & Three.js', 
          level: 70, 
          icon: <Globe size={24} />,
          color: 'from-green-400 to-emerald-600'
        },
        { 
          name: 'Tailwind CSS', 
          level: 92, 
          icon: <Palette size={24} />,
          color: 'from-cyan-400 to-teal-600'
        },
        { 
          name: 'Next.js', 
          level: 40, 
          icon: <Smartphone size={24} />,
          color: 'from-gray-600 to-gray-800'
        },
        { 
          name: 'Bootstrap', 
          level: 80, 
          icon: <Smartphone size={24} />,
          color: 'from-purple-500 to-pink-600'
        }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={32} />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { 
          name: 'Node.js', 
          level: 90, 
          icon: <Server size={24} />,
          color: 'from-green-500 to-green-700'
        },
        { 
          name: 'Python', 
          level: 85, 
          icon: <Code size={24} />,
          color: 'from-blue-500 to-yellow-500'
        },
        { 
          name: 'PostgreSQL', 
          level: 88, 
          icon: <Database size={24} />,
          color: 'from-blue-600 to-indigo-700'
        },
        { 
          name: 'MongoDB', 
          level: 82, 
          icon: <Database size={24} />,
          color: 'from-green-600 to-teal-700'
        },
        { 
          name: 'MySQL', 
          level: 85, 
          icon: <Database size={24} />,
          color: 'from-orange-500 to-red-600'
        },
        {
          name: 'RestFull API Management',
          level: 80,
          icon: <Database size={24} />,
          color: 'from-yellow-500 to-orange-500'
        },
        { 
          name: 'Express JS', 
          level: 90, 
          icon: <Globe size={24} />,
          color: 'from-purple-500 to-pink-600'
        }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Package size={32} />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { 
          name: 'Git & GitHub', 
          level: 95, 
          icon: <GitBranch size={24} />,
          color: 'from-gray-700 to-gray-900'
        },
        { 
          name: 'Docker', 
          level: 20, 
          icon: <Package size={24} />,
          color: 'from-blue-500 to-cyan-600'
        },
        { 
          name: 'AWS', 
          level: 40, 
          icon: <Cloud size={24} />,
          color: 'from-orange-400 to-yellow-500'
        },
        { 
          name: 'Redux', 
          level: 88, 
          icon: <Shield size={24} />,
          color: 'from-purple-500 to-violet-600'
        },
        { 
          name: 'Jest', 
          level: 5, 
          icon: <TestTube size={24} />,
          color: 'from-red-500 to-pink-600'
        },
        { 
          name: 'Stripe', 
          level: 50, 
          icon: <Cpu size={24} />,
          color: 'from-blue-600 to-purple-600'
        },
        { 
          name: 'Figma', 
          level: 70, 
          icon: <Figma size={24} />,
          color: 'from-purple-400 to-pink-500'
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 rotate-3d"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-animation"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 pulse-3d"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 slide-in-up">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto slide-in-up leading-relaxed">
            Here are the technologies and tools I master to bring innovative ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass p-8 rounded-2xl card-3d hover:shadow-2xl transition-all duration-500 border border-white/10 group"
              style={{
                animationDelay: `${categoryIndex * 0.2}s`,
                animation: 'slideInUp 0.8s ease-out forwards'
              }}
            >
              {/* Category Header */}
              <div className="text-center mb-10">
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform-3d group-hover:rotate-y-12 transition-transform duration-500 shadow-2xl`}>
                  <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item group/skill"
                    style={{
                      animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                      animation: 'slideInLeft 0.6s ease-out forwards'
                    }}
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center transform-3d group-hover/skill:rotate-y-12 group-hover/skill:scale-110 transition-all duration-300 shadow-lg`}>
                          <div className="text-white transform group-hover/skill:rotate-12 transition-transform duration-300">
                            {skill.icon}
                          </div>
                        </div>
                        <span className="text-gray-300 font-semibold text-lg group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400 font-bold text-lg">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Skill Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-gray-600/30">
                        <div
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{ width: `${skill.level}%` }}
                        >
                          {/* Animated shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Skill level indicator */}
                      <div 
                        className="absolute top-0 h-3 w-1 bg-white rounded-full shadow-lg transform -translate-y-1 transition-all duration-1000 ease-out"
                        style={{ left: `${skill.level}%` }}
                      ></div>
                    </div>

                    {/* Skill proficiency text */}
                    <div className="mt-2 text-right">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white`}>
                        {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Footer */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <div className="text-center">
                  <div className="flex justify-center space-x-2">
                    {category.skills.slice(0, 3).map((skill, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <div className="glass p-10 rounded-2xl card-3d hover:shadow-2xl transition-all duration-300 max-w-4xl mx-auto border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">Fresher</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-300 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">Not Yet</div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-8 text-lg">
            Interested in working together?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:rotate-1 glow-effect shadow-2xl border-2 border-transparent hover:border-white/20">
            Let's Build Something Amazing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;