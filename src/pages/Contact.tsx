import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, CheckCircle, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "yashamalmelaku@gmail.com",
      href: "mailto:yashamalmelaku@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+251-949-812341",
      href: "tel:+251949812341",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      href: "#",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "#",
      color: "hover:bg-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      href: "#",
      color: "hover:bg-gray-800"
    },
    {
      icon: MessageCircle,
      name: "TikTok",
      href: "#",
      color: "hover:bg-black"
    },
    {
      icon: MessageSquare,
      name: "Telegram",
      href: "#",
      color: "hover:bg-blue-500"
    },
    {
      icon: MessageCircle,
      name: "Discord",
      href: "#",
      color: "hover:bg-indigo-600"
    }
  ];

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
              Get In Touch
            </h1>
            <p className="mb-8 text-xl text-blue-200 md:text-2xl">
              Let's discuss your next project and bring your ideas to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-8 bg-white shadow-xl rounded-2xl">
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  Send a Message
                </h2>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 mb-6 bg-green-100 border border-green-200 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                    <span className="text-green-800">Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          errors.email ? 'border-red-500' : ''
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                        errors.subject ? 'border-red-500' : ''
                      }`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                        errors.message ? 'border-red-500' : ''
                      }`}
                      placeholder="Tell me about your project or ask any questions..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center w-full px-8 py-4 font-semibold text-white transition-all duration-300 bg-blue-800 rounded-lg hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-3 border-b-2 border-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  Contact Information
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                  Ready to start your next project? I'm here to help bring your ideas to life. 
                  Whether it's a website, mobile app, or digital marketing strategy, let's discuss 
                  how we can work together.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    className="flex items-center p-6 transition-all duration-300 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg group"
                    whileHover={{ y: -2 }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-gray-900">
                        {method.title}
                      </h3>
                      <p className="text-gray-600">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>



              {/* Response Time */}
              <div className="p-6 bg-orange-500 rounded-2xl">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Quick Response Guaranteed
                </h3>
                <p className="text-white">
                  I typically respond to messages within 24 hours. For urgent projects, 
                  feel free to call me directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              My Location
            </h2>
            <p className="text-lg text-gray-600">
              Based in Addis Ababa, Ethiopia - Available for remote work worldwide
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden bg-white shadow-xl rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.613328!3d8.963479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Addis Ababa Location"
              />
              <div className="absolute p-3 rounded-lg shadow-lg top-4 left-4 bg-white/90 backdrop-blur-md">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-orange-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Addis Ababa, Ethiopia</h3>
                    <p className="text-sm text-gray-600">Available for remote work</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
{/* FAQ Section */}
<section className="relative flex flex-col items-center justify-start min-h-screen py-20 overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-blue-400 to-blue-900"></div>

  <div className="relative w-full max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
        Frequently Asked Questions
      </h2>
    </motion.div>

    <div className="space-y-8">
      {[
        {
          question: "What services do you offer?",
          answer: "I specialize in web development, mobile app development, digital marketing, and tech content creation. This includes responsive websites, Android apps, SEO optimization, and educational programming content."
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary depending on complexity. A simple website might take 1-2 weeks, while a complex web application or mobile app could take 1-3 months. I'll provide a detailed timeline after discussing your requirements."
        },
        {
          question: "Do you work with clients remotely?",
          answer: "Yes! I work with clients worldwide through video calls, email, and project management tools. I'm based in Addis Ababa, Ethiopia, but distance is no barrier to delivering excellent work."
        },
        {
          question: "What's your approach to project management?",
          answer: "I believe in clear communication and regular updates. I use modern project management tools, provide regular progress reports, and ensure you're involved in every major decision throughout the development process."
        }
      ].map((faq, index) => (
        <motion.div
          key={index}
          className="p-6 transition-colors duration-300 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-3 text-xl font-semibold text-white">
            {faq.question}
          </h3>
          <p className="leading-relaxed text-blue-200">
            {faq.answer}
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

export default Contact;