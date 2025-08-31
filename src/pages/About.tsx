import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Download, MapPin, Calendar, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-blue-400 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Passionate developer crafting digital experiences with modern technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full p-1">
                  <img
                    src="/image.png"
                    alt="Yashamal Melaku"
                    className="w-full h-full object-cover rounded-full bg-white"
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
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies, 
                mobile app development, and digital marketing. I love creating innovative solutions 
                and bringing ideas to life through clean, efficient code and beautiful user interfaces.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
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

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Download Resume
                </button>
                <a
                  href="mailto:yashamalmelaku@gmail.com"
                  className="bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-center"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-lg text-gray-600">
              My expertise spans across multiple domains of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Creating modern, responsive websites with React, Vue.js, and cutting-edge technologies",
                icon: "🌐",
                color: "from-blue-500 to-purple-600"
              },
              {
                title: "Mobile Development", 
                description: "Building native Android apps and cross-platform solutions with React Native and Flutter",
                icon: "📱",
                color: "from-green-500 to-blue-500"
              },
              {
                title: "Digital Marketing",
                description: "SEO optimization, content strategy, and social media marketing to grow your online presence",
                icon: "📈",
                color: "from-orange-500 to-red-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              My Journey
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6 leading-relaxed">
                My journey in technology began during my studies at Haramaya University, where I'm pursuing 
                a BSc in Information Technology. What started as curiosity about how websites work has evolved 
                into a passion for creating digital solutions that make a real impact.
              </p>
              <p className="mb-6 leading-relaxed">
                Through projects like developing an e-commerce Android app and building a property management 
                system for my university, I've learned that great software isn't just about clean code—it's 
                about understanding user needs and creating experiences that truly serve them.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you'll find me creating educational content on TikTok as TECH+, 
                helping fellow students understand programming concepts through engaging tutorials. 
                I believe in the power of sharing knowledge and building communities around technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-blue-400 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm here to help you create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:yashamalmelaku@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 hover:bg-gray-100 font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 w-5 h-5" />
                Send Email
              </a>
              <a
                href="tel:+251949812341"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Floating CTAs */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 lg:hidden z-40">
        <motion.a
          href="mailto:yashamalmelaku@gmail.com"
          className="flex items-center justify-center w-16 h-16 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
          className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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