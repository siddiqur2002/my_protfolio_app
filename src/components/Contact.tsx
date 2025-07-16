import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle, Calendar, Coffee, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form after submission
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={28} />,
      label: 'Email',
      value: 'sidab2002@gmail.com',
      href: 'mailto:sidab2002@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone size={28} />,
      label: 'Phone',
      value: '+880 1784071666',
      href: 'tel:+8801784071666',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin size={28} />,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    { 
      icon: <Github size={24} />, 
      href: 'https://github.com/siddiqur2002', 
      label: 'GitHub',
      color: 'hover:bg-gray-700',
      hoverColor: 'hover:text-gray-100'
    },
    { 
      icon: <Linkedin size={24} />, 
      href: '#', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600',
      hoverColor: 'hover:text-blue-100'
    },
    { 
      icon: <Twitter size={24} />, 
      href: '#', 
      label: 'Twitter',
      color: 'hover:bg-sky-500',
      hoverColor: 'hover:text-sky-100'
    },
    { 
      icon: <MessageCircle size={24} />, 
      href: 'https://m.me/muhammad.siddiqur.rahman.999127', 
      label: 'Messenger',
      color: 'hover:bg-indigo-600',
      hoverColor: 'hover:text-indigo-100'
    }
  ];

  const quickActions = [
    {
      icon: <Calendar size={20} />,
      title: 'Schedule a Call',
      description: 'Book a 30-min consultation',
      color: 'from-purple-600 to-pink-600',
      hoverColor: 'from-purple-700 to-pink-700'
    },
    {
      icon: <Coffee size={20} />,
      title: 'Grab Coffee',
      description: 'Let\'s meet in person',
      color: 'from-amber-600 to-orange-600',
      hoverColor: 'from-amber-700 to-orange-700'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 rotate-3d"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-animation"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 pulse-3d"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 slide-in-up">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto slide-in-up leading-relaxed">
            Ready to bring your vision to life? I'm here to help you create something extraordinary. 
            Let's discuss your project and make it happen together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Enhanced Contact Information */}
          <div className="lg:col-span-2 slide-in-left">
            <div className="glass p-10 rounded-2xl card-3d hover:shadow-2xl transition-all duration-500 border border-white/10">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect">
                  <Heart size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
                <p className="text-gray-300">I'd love to hear from you</p>
              </div>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-6 p-6 rounded-xl hover:bg-white/5 transition-all duration-300 transform hover:scale-105 group border border-transparent hover:border-white/10"
                  >
                    <div className={`bg-gradient-to-r ${item.color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-semibold text-lg">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-6 text-center">Follow My Journey</h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`bg-white/10 text-white ${social.color} ${social.hoverColor} p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-white/10 hover:border-white/20`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-3 slide-in-right">
            <div className="glass p-10 rounded-2xl card-3d hover:shadow-2xl transition-all duration-500 border border-white/10">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white mb-4">Start a Conversation</h3>
                <p className="text-gray-300">Tell me about your project and let's create something amazing</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-gray-500"
                      placeholder="Your Name Here"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-gray-500"
                      placeholder="Your Email Here"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-gray-500"
                    placeholder="Let's work together on something amazing"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-6 py-4 bg-white/5 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 resize-none group-hover:border-gray-500"
                    placeholder="Tell me about your project, goals, timeline, and how I can help bring your vision to life..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-4 px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 glow-effect shadow-2xl'
                  } text-white border-2 border-transparent hover:border-white/20`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Actions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl card-3d hover:shadow-2xl transition-all duration-300 border border-white/10 group cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className={`bg-gradient-to-r ${action.color} group-hover:${action.hoverColor} p-4 rounded-xl transition-all duration-300 transform group-hover:scale-110 shadow-lg`}>
                  <div className="text-white">
                    {action.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2 group-hover:text-purple-300 transition-colors">
                    {action.title}
                  </h4>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {action.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="glass p-12 rounded-2xl card-3d hover:shadow-2xl transition-all duration-300 max-w-5xl mx-auto border border-white/10">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 glow-effect">
                <Coffee size={40} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to Create Something <span className="text-gradient">Extraordinary</span>?
              </h3>
              <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Whether you have a clear vision or just a spark of an idea, I'm here to help you 
                transform it into a digital reality that exceeds expectations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:rotate-1 glow-effect shadow-2xl border-2 border-transparent hover:border-white/20">
                Start Your Project
              </button>
              <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="mt-24 pt-16 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="text-gray-400">Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span className="text-gray-400">by Md Siddiqur Rahman</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Md Siddiqur Rahman. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;