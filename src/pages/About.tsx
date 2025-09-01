import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Download, MapPin, Calendar, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-br from-orange-600 via-blue-400 to-blue-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              About Me
            </h1>
            <p className="mb-8 text-xl text-blue-200 md:text-2xl">
              Passionate developer crafting digital experiences with modern technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative mx-auto w-80 h-80">
                <div className="absolute inset-0 p-1 rounded-full bg-gradient-to-r from-orange-500 to-blue-600">
                  <img
                    src="/image.png"
                    alt="Yashamal Melaku"
                    className="object-cover w-full h-full bg-white rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Hello, I'm Yashamal Melaku
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                I’m a passionate Frontend Web Developer who specializes in creating modern, responsive, and high-performance websites with React, TypeScript, JavaScript, HTML, and CSS.

I enjoy turning ideas into interactive digital experiences built with clean code, intuitive user interfaces, and visually striking designs. By combining technical skills with creativity, I make sure every project is both functional and engaging for users.

Outside of coding, I’m deeply interested in technology, innovation, and tech education. I share tutorials and insights to help others learn and grow, while continuing to expand my own knowledge and skills.
            </p>  <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Available for Work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Full-Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Download className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Resume Available</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="px-8 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-orange-500 to-blue-600 hover:shadow-lg hover:scale-105">
                  Download Resume
                </button>
                <a
                  href="mailto:yashamalmelaku@gmail.com"
                  className="px-8 py-3 font-semibold text-center text-orange-500 transition-all duration-300 bg-transparent border-2 border-orange-500 rounded-lg hover:bg-orange-500 hover:text-white"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              What I Do
            </h2>
            <p className="text-lg text-gray-600">
              My expertise spans across multiple domains of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Web Development",
                description: "Creating modern, responsive websites with React, Vue.js, and cutting-edge technologies",
                icon: "🌐",
                color: "from-blue-500 to-purple-600"
              },
               {
    title: "Content Creation", 
    description: "Creating engaging tutorials, tech content, and educational resources to share knowledge and inspire others",
    icon: "✍️",
    color: "from-purple-500 to-pink-500"
  },
              {
                title: "Digital Marketing",
                description: "SEO optimization, content strategy, and social media marketing to grow your online presence",
                icon: "📈",
                color: "from-orange-500 to-red-500"
              },{
    title: "Social Media Management",
    description: "Helping brands and individuals grow their online presence through strategy, content planning, and community engagement",
    icon: "📱",
    color: "from-green-500 to-blue-500"
  }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-8 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 text-2xl`}>
                    {service.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              My Journey
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-6 leading-relaxed">
                My journey in technology began during my studies at Haramaya University, where I'm pursuing 
                a BSc in Information Technology. What started as curiosity about how websites work has evolved 
                into a passion for creating digital solutions that make a real impact.
              </p>
              <p className="mb-6 leading-relaxed">
                Through projects like developing an e-commerce Android app and building a property management 
                system for my university, I've learned that great software isn't just about clean code, it's 
                about understanding user needs and creating experiences that truly serve them.
              </p>
              <p className="leading-relaxed">
When I’m not coding, I create educational tech content as TECH+, where I share tutorials and insights on web development and technology. My goal is to make complex concepts simple, inspire others to learn, and contribute to a growing community of tech enthusiasts and professionals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 text-white bg-gradient-to-br from-orange-600 via-blue-400 to-blue-900">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Let's Work Together
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-blue-200">
              Ready to bring your ideas to life? I'm here to help you create something amazing.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:yashamalmelaku@gmail.com"
                className="inline-flex items-center px-8 py-4 font-semibold duration-300 bg-red-400 rounded-full text-white-600 transitingeon-all text-ora bg-green hover:bg-green-400 hover:text-blue-900 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
              <a
                href="tel:+251949812341"
                className="inline-flex items-center px-8 py-4 font-semibold duration-300 bg-green-400 rounded-full text-white-600 transitingeon-all text-ora bg-green hover:bg-green-400 hover:text-blue-900 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Floating CTAs */}
      <div className="fixed z-40 flex flex-col space-y-3 bottom-6 right-6 lg:hidden">
        <motion.a
          href="mailto:yashamalmelaku@gmail.com"
          className="flex items-center justify-center w-16 h-16 text-white transition-all duration-300 bg-red-500 rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          aria-label="Send Email"
        >
          <Mail className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="tel:+251949812341"
          className="flex items-center justify-center w-16 h-16 text-white transition-all duration-300 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          aria-label="Call Phone"
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
  );
};

export default About;