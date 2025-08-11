import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter, Menu, X, Code, Database, Globe, Monitor, Shield, Users, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openLocation = () => {
    window.open('https://maps.google.com/?q=Addis+Ababa,+Ethiopia', '_blank');
  };

  const projects = [
    {
      title: "Online Shopping Android App",
      description: "A complete e-commerce mobile application for a cosmetic company featuring user authentication, product catalog, shopping cart, and secure payment integration.",
      tech: ["Java", "Android Studio", "Firebase", "SQLite"],
      type: "Mobile App",
      status: "Completed",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Haramaya University Property Management System",
      description: "A comprehensive web-based system for managing university property including inventory tracking, maintenance scheduling, and asset reporting.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      type: "Web Application",
      status: "Completed",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "TECH + Content Creation",
      description: "Educational tech content creation on TikTok focusing on programming tutorials, tech tips, and software development insights for aspiring developers.",
      tech: ["Video Editing", "Social Media", "Content Strategy"],
      type: "Content Creation",
      status: "Ongoing",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Student Information Management System",
      description: "A desktop application for managing student records, grades, attendance, and academic progress with role-based access control for administrators and teachers.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      type: "Desktop Application",
      status: "Completed",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "E-commerce Website with Payment Integration",
      description: "A full-stack e-commerce platform with product management, user accounts, shopping cart functionality, and integrated payment processing using modern web technologies.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      type: "Full-Stack Web App",
      status: "In Progress",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Weather Forecast Mobile App",
      description: "A cross-platform mobile application providing real-time weather information, 7-day forecasts, and location-based weather alerts with an intuitive user interface.",
      tech: ["React Native", "REST API", "AsyncStorage", "Geolocation"],
      type: "Mobile App",
      status: "Completed",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Task Management Dashboard",
      description: "A responsive web dashboard for project and task management featuring kanban boards, team collaboration tools, deadline tracking, and progress analytics.",
      tech: ["Vue.js", "Firebase", "Vuex", "Chart.js"],
      type: "Web Dashboard",
      status: "Completed",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Social Media Analytics Tool",
      description: "A data analysis application that tracks social media engagement, provides insights into content performance, and generates automated reports for content creators.",
      tech: ["Python", "Django", "PostgreSQL", "Chart.js", "API Integration"],
      type: "Web Application",
      status: "In Progress",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Personal Finance Tracker",
      description: "A comprehensive financial management application with expense tracking, budget planning, investment monitoring, and financial goal setting capabilities.",
      tech: ["Flutter", "Dart", "SQLite", "Charts", "Local Storage"],
      type: "Mobile App",
      status: "Completed",
      image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const skills = {
    programming: ['Java', 'C++', 'JavaScript', 'Python', 'Dart', 'PHP'],
    webDevelopment: ['HTML5', 'CSS3', 'React', 'Vue.js', 'Node.js', 'WordPress'],
    databases: ['SQL', 'MySQL', 'Firebase', 'MongoDB', 'PostgreSQL'],
    tools: ['Microsoft Office', 'Linux', 'Windows', 'Android Studio', 'Git', 'VS Code'],
    mobile: ['Android Development', 'Flutter', 'React Native'],
    other: ['TCP/IP', 'DNS', 'LAN/WAN', 'Cybersecurity', 'Content Creation']
  };

  const themeClasses = {
    bg: isDarkMode ? 'bg-gradient-to-br from-gray-900 to-blue-900' : 'bg-gradient-to-br from-gray-50 to-blue-50',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    navBg: isDarkMode ? 'bg-gray-900/90' : 'bg-white/90',
    sectionBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    sectionBgAlt: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    accent: isDarkMode ? 'from-orange-500 to-blue-400' : 'from-blue-600 to-purple-600',
    accentHover: isDarkMode ? 'from-orange-600 to-blue-500' : 'from-blue-700 to-purple-700',
    border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    input: isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${themeClasses.navBg} backdrop-blur-md z-50 shadow-sm transition-colors duration-300`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className={`text-2xl font-bold bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent`}>
              Yashamal Melaku
            </div>
            
            {/* Theme Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${themeClasses.cardBg} ${themeClasses.text} hover:bg-opacity-80 transition-all duration-200 shadow-md`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden space-x-8 md:flex">
                {['about', 'projects', 'skills', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`${themeClasses.textSecondary} hover:text-orange-500 dark:hover:text-blue-400 transition-colors duration-200 capitalize font-medium`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${themeClasses.text}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="pb-4 space-y-2 md:hidden">
              {['about', 'projects', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-2 ${themeClasses.textSecondary} hover:text-orange-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors capitalize`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto text-center max-w-7xl">
          <div className="mb-8 animate-fade-in">
            <div
  className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r ${themeClasses.accent} flex items-center justify-center text-white text-4xl font-bold shadow-lg`}
>
  <img
    src="123.jpg"
    alt="Profile"
    className="object-cover w-full h-full rounded-full"
  />
</div>

            <h1 className={`text-5xl md:text-7xl font-bold ${themeClasses.text} mb-4`}>
              Yashamal Melaku
            </h1>
            <p className={`text-xl md:text-2xl ${themeClasses.textSecondary} mb-8`}>
              Website Development | Digital Marketing | Tech Content Creator
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${themeClasses.textSecondary}`}>
              <button 
                onClick={openLocation}
                className="flex items-center gap-2 transition-colors cursor-pointer hover:text-orange-500 dark:hover:text-blue-400"
              >
                <MapPin size={20} />
                <span>Addis Ababa, Ethiopia</span>
              </button>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <span>yashamalmelaku@gmail.com</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className={`animate-bounce mx-auto block p-2 rounded-full hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors`}
          >
            <ChevronDown size={32} className={themeClasses.textSecondary} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 px-4 sm:px-6 lg:px-8 ${themeClasses.sectionBg} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 className={`text-4xl font-bold text-center ${themeClasses.text} mb-12`}>About Me</h2>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
  <p className={`text-lg ${themeClasses.textSecondary} leading-relaxed`}>
    I create modern, responsive websites, craft effective digital marketing strategies, and produce engaging tech content that helps ideas come to life online.
  </p>
  <p className={`text-lg ${themeClasses.textSecondary} leading-relaxed`}>
    My work blends technical expertise with creativity from building clean, SEO-friendly sites to running targeted marketing campaigns and sharing tech knowledge through my content. Every project is an opportunity to bring a vision to life and deliver results that matter.
  </p>
  <p className={`text-lg ${themeClasses.textSecondary} leading-relaxed`}>
    If you need a website that works, marketing that connects, or tech content that inspires, you’re in the right place.
  </p>
</div>

            <div className="text-center">
              <div className={`w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br ${themeClasses.accent} flex items-center justify-center text-white text-8xl font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                 <img
    src="12345.jpg"
    alt="Profile"
    className={`w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br ${themeClasses.accent} flex items-center justify-center text-white text-8xl font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300`}
  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 px-4 sm:px-6 lg:px-8 ${themeClasses.sectionBgAlt} transition-colors duration-300`}>
        <div className="mx-auto max-w-7xl fade-in-section">
          <h2 className={`text-4xl font-bold text-center ${themeClasses.text} mb-12`}>Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className={`${themeClasses.cardBg} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-xl font-bold ${themeClasses.text} leading-tight`}>{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>{project.description}</p>
                  <div className="mb-4">
                    <span className={`text-sm font-medium ${themeClasses.textSecondary} mb-2 block`}>Technology Stack:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`flex justify-between items-center pt-4 border-t ${themeClasses.border}`}>
                    <span className={`text-sm ${themeClasses.textSecondary} font-medium`}>{project.type}</span>
                    <button className="flex items-center gap-2 font-medium text-orange-600 transition-colors dark:text-blue-400 hover:text-orange-800 dark:hover:text-blue-600">
                      <span>View Details</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 px-4 sm:px-6 lg:px-8 ${themeClasses.sectionBg} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto fade-in-section">
          <h2 className={`text-4xl font-bold text-center ${themeClasses.text} mb-12`}>Technical Skills</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-blue-600 dark:text-blue-400" size={24} />
                <h3 className={`text-xl font-bold ${themeClasses.text}`}>Programming</h3>
              </div>
              <div className="space-y-2">
                {skills.programming.map((skill, index) => (
                  <div key={index} className={`${themeClasses.cardBg} px-3 py-2 rounded-lg shadow-sm`}>
                    <span className={themeClasses.text}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-green-600 dark:text-green-400" size={24} />
                <h3 className={`text-xl font-bold ${themeClasses.text}`}>Web Development</h3>
              </div>
              <div className="space-y-2">
                {skills.webDevelopment.map((skill, index) => (
                  <div key={index} className={`${themeClasses.cardBg} px-3 py-2 rounded-lg shadow-sm`}>
                    <span className={themeClasses.text}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-purple-600 dark:text-purple-400" size={24} />
                <h3 className={`text-xl font-bold ${themeClasses.text}`}>Databases</h3>
              </div>
              <div className="space-y-2">
                {skills.databases.map((skill, index) => (
                  <div key={index} className={`${themeClasses.cardBg} px-3 py-2 rounded-lg shadow-sm`}>
                    <span className={themeClasses.text}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="text-orange-600 dark:text-orange-400" size={24} />
                <h3 className={`text-xl font-bold ${themeClasses.text}`}>Tools & Platforms</h3>
              </div>
              <div className="space-y-2">
                {skills.tools.map((skill, index) => (
                  <div key={index} className={`${themeClasses.cardBg} px-3 py-2 rounded-lg shadow-sm`}>
                    <span className={themeClasses.text}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-red-600 dark:text-red-400" size={24} />
                <h3 className={`text-xl font-bold ${themeClasses.text}`}>Mobile Development</h3>
              </div>
              <div className="space-y-2">
                {skills.mobile.map((skill, index) => (
                  <div key={index} className={`${themeClasses.cardBg} px-3 py-2 rounded-lg shadow-sm`}>
                    <span className={themeClasses.text}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-teal-600 dark:text-teal-400" size={24} />
                <h3 className={`text-xl font-bold ${themeClasses.text}`}>Other Skills</h3>
              </div>
              <div className="space-y-2">
                {skills.other.map((skill, index) => (
                  <div key={index} className={`${themeClasses.cardBg} px-3 py-2 rounded-lg shadow-sm`}>
                    <span className={themeClasses.text}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-16 px-4 sm:px-6 lg:px-8 ${themeClasses.sectionBgAlt} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 className={`text-4xl font-bold text-center ${themeClasses.text} mb-12`}>Education & Certifications</h2>
          <div className="space-y-8">
            <div className={`${themeClasses.cardBg} p-6 rounded-xl shadow-lg`}>
              <div className="flex flex-col mb-4 md:flex-row md:items-center md:justify-between">
                <h3 className={`text-xl font-bold ${themeClasses.text}`}>BSc in Information Technology</h3>
                <span className="font-medium text-blue-600 dark:text-blue-400">2021 - 2025</span>
              </div>
              <p className={`${themeClasses.textSecondary} mb-2`}>Haramaya University</p>
              <p className={themeClasses.textSecondary}>Comprehensive study of software development, database systems, networking, and cybersecurity fundamentals.</p>
            </div>

            <div className={`${themeClasses.cardBg} p-6 rounded-xl shadow-lg`}>
              <div className="flex flex-col mb-4 md:flex-row md:items-center md:justify-between">
                <h3 className={`text-xl font-bold ${themeClasses.text}`}>Android Developer Certificate</h3>
                <span className="font-medium text-green-600 dark:text-green-400">Completed</span>
              </div>
              <p className={`${themeClasses.textSecondary} mb-2`}>Udacity</p>
              <p className={themeClasses.textSecondary}>Specialized training in Android application development, including UI/UX design, data persistence, and API integration.</p>
            </div>

    
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-4 sm:px-6 lg:px-8 ${themeClasses.sectionBg} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 className={`text-4xl font-bold text-center ${themeClasses.text} mb-12`}>Get In Touch</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-orange-600 dark:text-blue-400" size={24} />
                  <div>
                    <p className={`font-medium ${themeClasses.text}`}>Email</p>
                    <a 
                      href="mailto:yashamalmelaku@gmail.com"
                      className={`${themeClasses.textSecondary} hover:text-orange-600 dark:hover:text-blue-400 transition-colors`}
                    >
                      yashamalmelaku@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-orange-600 dark:text-blue-400" size={24} />
                  <div>
                    <p className={`font-medium ${themeClasses.text}`}>Phone</p>
                    <a 
                      href="tel:+251949812341"
                      className={`${themeClasses.textSecondary} hover:text-orange-600 dark:hover:text-blue-400 transition-colors`}
                    >
                      +251-949-812341
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-orange-600 dark:text-blue-400" size={24} />
                  <div>
                    <p className={`font-medium ${themeClasses.text}`}>Location</p>
                    <button 
                      onClick={openLocation}
                      className={`${themeClasses.textSecondary} hover:text-orange-600 dark:hover:text-blue-400 transition-colors text-left`}
                    >
                      Addis Ababa, Ethiopia
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className={`text-lg font-medium ${themeClasses.text} mb-4`}>Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/yashamal-melaku" className="p-3 text-blue-600 transition-colors bg-blue-100 rounded-lg dark:bg-blue-900 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://github.com/yashamalmelaku" className="p-3 text-gray-600 transition-colors bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <Github size={24} />
                  </a>
                  <a href="https://twitter.com/yashamalmelaku" className="p-3 text-blue-400 transition-colors bg-blue-100 rounded-lg dark:bg-blue-900 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className={`w-full px-4 py-3 ${themeClasses.input} rounded-lg focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all`}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className={`w-full px-4 py-3 ${themeClasses.input} rounded-lg focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  className={`w-full px-4 py-3 ${themeClasses.input} rounded-lg focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all resize-vertical`}
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r ${themeClasses.accent} text-white py-3 px-6 rounded-lg font-medium hover:${themeClasses.accentHover} transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && (
                <p className={`text-center ${submitMessage.includes('Thank you') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
        <div className="mx-auto text-center max-w-7xl">
          <p className="text-gray-400">
            © 2025 Yashamal Melaku. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
                                                                                                                                                                             
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in-section.animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;