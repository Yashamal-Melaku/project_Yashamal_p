import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Globe, TrendingUp, Star, ChevronLeft, ChevronRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const featuredProjects = [
    {
      title: "Online Shopping Android App",
      description: "E-commerce mobile app with Firebase integration",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Android", "Java", "Firebase"]
    },
    {
      title: "Property Management System",
      description: "Web platform for Haramaya University asset management",
      image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["PHP", "MySQL", "JavaScript"]
    },
    {
      title: "TECH+ Content Creation",
      description: "Educational programming & tech tutorials on TikTok",
      image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Content Creation", "Education", "Social Media"]
    }
  ];

  const testimonials = [
    {
      text: "Yashamal's tech content helped me understand programming concepts clearly!",
      author: "Tech Student",
      role: "TECH+ Follower"
    },
    {
      text: "Professional web development skills and great attention to detail.",
      author: "Project Collaborator",
      role: "Development Team"
    },
    {
      text: "Excellent digital marketing strategies that delivered real results.",
      author: "Business Client",
      role: "Marketing Campaign"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-blue-400 to-blue-900">
          <AnimatedBackground />
        </div>
        <div className="relative z-10 px-4 text-center text-white sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="mb-6 text-5xl font-bold md:text-7xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Yashamal Melaku
            </motion.h1>
            <motion.p 
              className="mb-8 text-xl text-blue-200 md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Website Development | Digital Marketing | Tech Content Creator
            </motion.p>
            <motion.div 
              className="flex flex-col justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-orange-600 rounded-full hover:bg-orange-700 hover:scale-105 hover:shadow-2xl"
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-blue-900 hover:scale-105"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Passionate About Technology & Innovation
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              I create modern, responsive websites, craft effective digital marketing strategies, 
              and produce engaging tech content that brings ideas to life online. With a blend of 
              technical expertise and creativity, I focus on delivering solutions that are both 
              functional and visually stunning.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-lg font-semibold text-orange-600 transition-colors duration-300 hover:text-blue-600"
            >
              Learn More About Me
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              A showcase of my latest work in web development, mobile apps, and content creation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-600">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-orange-600 rounded-full hover:bg-orange-700 hover:scale-105"
            >
              See All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 text-white bg-gradient-to-br from-orange-600 via-blue-400 to-blue-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              What People Say
            </h2>
            <p className="text-lg text-blue-200">
              Feedback from collaborators and the tech community
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div 
              className="p-8 text-center bg-white/10 backdrop-blur-md rounded-2xl md:p-12"
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="mb-6 text-xl font-medium md:text-2xl">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div>
                <div className="text-lg font-semibold">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-blue-100">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 transition-colors duration-300 rounded-full bg-white/20 hover:bg-white/30"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? 'bg-orange-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-3 transition-colors duration-300 rounded-full bg-white/20 hover:bg-white/30"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
{/* Companies I've Worked With */}
<section className="py-16 bg-white">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <motion.div 
      className="mb-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
        Companies I've Worked With
      </h2>
      <p className="text-lg text-gray-600">
        Trusted by leading organizations and institutions
      </p>
    </motion.div>

    <div className="grid items-center grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
      {[
        { name: "Haramaya University", logo: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
        { name: "Microsoft", logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
        { name: "Google", logo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
        { name: "Amazon", logo: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
        { name: "Meta", logo: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
        { name: "Apple", logo: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
        { name: "Netflix", logo: "https://images.pexels.com/photos/5077063/pexels-photo-5077063.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
        { name: "Tesla", logo: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
        { name: "IBM", logo: "https://images.pexels.com/photos/374631/pexels-photo-374631.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
        { name: "Intel", logo: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
        { name: "Adobe", logo: "https://images.pexels.com/photos/5698412/pexels-photo-5698412.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
        { name: "Samsung", logo: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" }
      ].map((company, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center p-4 transition-all duration-300 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="w-24 h-24 mb-3 overflow-hidden transition-shadow duration-300 bg-white rounded-full shadow-md group-hover:shadow-lg">
            <img 
              src={company.logo} 
              alt={`${company.name} logo`}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-base font-semibold text-center text-gray-900 transition-colors duration-300 group-hover:text-orange-600">
            {company.name}
          </h3>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              What I Do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Code, title: "Web Development", desc: "Modern, responsive websites" },
              { icon: Smartphone, title: "Mobile Apps", desc: "Android & cross-platform" },
              { icon: Globe, title: "Digital Marketing", desc: "SEO & social strategies" },
              { icon: TrendingUp, title: "Content Creation", desc: "Tech education & tutorials" }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 text-center transition-colors duration-300 rounded-xl hover:bg-gray-50 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white transition-colors duration-300 bg-blue-800 rounded-full group-hover:bg-orange-500">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Floating CTAs */}
      <div className="fixed z-40 flex flex-col space-y-3 bottom-6 right-6 lg:hidden">
        <motion.a
          href="mailto:yashamalmelaku@gmail.com"
          className="flex items-center justify-center w-16 h-16 text-white transition-all duration-300 bg-red-500 rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl dark:bg-red-600 dark:hover:bg-red-700"
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
          className="flex items-center justify-center w-16 h-16 text-white transition-all duration-300 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl dark:bg-green-600 dark:hover:bg-green-700"
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

export default Home;