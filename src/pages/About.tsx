import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, Coffee, BookOpen, Mail, Phone } from 'lucide-react';

const About = () => {
  const coreStrengths = [
    {
      icon: Target,
      title: "Problem-Solving Mindset",
      description: "Approaching challenges with analytical thinking and creative solutions."
    },
    {
      icon: BookOpen,
      title: "Continuous Learner",
      description: "Currently pursuing HarvardX CS50x and ALX ProDev to stay updated."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Passionate about sharing knowledge through TECH+ content creation."
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Committed to delivering high-quality, user-centered digital solutions."
    }
  ];

  const approach = [
    {
      number: "01",
      title: "Technical Expertise",
      description: "Leveraging modern technologies and best practices in every project."
    },
    {
      number: "02",
      title: "Creative Solutions",
      description: "Blending technical skills with creative thinking for unique solutions."
    },
    {
      number: "03",
      title: "User-Centered Design",
      description: "Focusing on SEO, usability, and results-driven design principles."
    },
    {
      number: "04",
      title: "Knowledge Sharing",
      description: "Contributing to the tech community through educational content."
    }
  ];

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
              Creating digital solutions that make a difference
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-800 to-orange-500 rounded-2xl"></div>
                <div className="absolute inset-4 bg-white rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-800 rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600">Professional Photo</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hello, I'm Yashamal
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I create modern, responsive websites, craft effective digital marketing strategies, 
                and produce engaging tech content that brings ideas to life online. With a passion 
                for technology and innovation, I strive to deliver solutions that are both 
                functional and visually stunning.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Based in Addis Ababa, Ethiopia, I'm currently pursuing my BSc in Information 
                Technology at Haramaya University while continuously expanding my skills through 
                various online programs and real-world projects.
              </p>
              <div className="flex items-center space-x-4">
                <Coffee className="w-8 h-8 text-orange-500" />
                <span className="text-lg text-gray-700">Fueled by coffee and curiosity</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Lightbulb className="w-16 h-16 text-orange-500 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              My Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering individuals and businesses with clean, impactful digital solutions 
              that drive results and create meaningful connections. I believe technology 
              should be accessible, beautiful, and purposeful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Approach
            </h2>
            <p className="text-lg text-gray-600">
              How I tackle projects and deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-800 text-white text-xl font-bold rounded-full">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Strengths
            </h2>
            <p className="text-lg text-blue-200">
              What drives my success in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreStrengths.map((strength, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <strength.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {strength.title}
                </h3>
                <p className="text-blue-200 leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Values That Guide Me
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Quality Over Quantity</h3>
                    <p className="text-gray-600">Every project receives meticulous attention to detail.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Continuous Learning</h3>
                    <p className="text-gray-600">Staying updated with the latest technologies and trends.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Community Impact</h3>
                    <p className="text-gray-600">Using skills to make a positive difference in the tech community.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">TECH+ TikTok</h3>
                    <p className="text-gray-600 text-sm">Educational Content Creator</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Sharing programming knowledge and tech insights with the community.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Open Source</h3>
                    <p className="text-gray-600 text-sm">Community Contributor</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Contributing to open source projects and sharing knowledge freely.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Floating CTAs */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 lg:hidden z-40">
        <motion.a
          href="mailto:yashamalmelaku@gmail.com"
          className="flex items-center justify-center w-16 h-16 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-red-600 dark:hover:bg-red-700"
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
          className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-green-600 dark:hover:bg-green-700"
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