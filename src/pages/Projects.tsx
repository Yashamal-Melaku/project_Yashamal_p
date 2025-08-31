import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Filter,
  Smartphone,
  Globe,
  Video,
  Database,
  BarChart,
  Mail,
  Phone
} from 'lucide-react';

// Define all possible categories
type Category = 'Mobile Apps' | 'Web Apps' | 'Content Creation' | 'Full-Stack' | 'Dashboards' | 'Desktop Apps';

// Define Project type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: Category | string; // Accept string to handle any future categories
  status: 'Completed' | 'In Progress' | string;
  features: string[];
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "Online Shopping Android App",
      description: "A comprehensive e-commerce mobile application built with Java and Firebase integration. Features include user authentication, product catalog, shopping cart, and secure payment processing.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Android", "Java", "Firebase", "XML"],
      category: "Mobile Apps",
      status: "Completed",
      features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Integration"]
    },
    {
      id: 2,
      title: "Haramaya University Property Management System",
      description: "A comprehensive web-based platform for managing university assets and inventory. Built with PHP and MySQL, featuring role-based access control and reporting system.",
      image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      category: "Web Apps",
      status: "Completed",
      features: ["Asset Management", "Role-based Access", "Reporting System", "Inventory Tracking"]
    },
    {
      id: 3,
      title: "TECH+ Content Creation",
      description: "Educational programming and tech tutorials on TikTok, helping students understand complex programming concepts through engaging short-form content.",
      image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Content Creation", "Video Editing", "Educational Design"],
      category: "Content Creation",
      status: "Ongoing",
      features: ["Programming Tutorials", "Tech Tips", "Student Engagement", "Community Building"]
    },
    {
      id: 4,
      title: "Student Information System",
      description: "A desktop application for managing student records with role-based access control. Built with modern desktop technologies for efficient data management.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Java", "SQLite", "JavaFX"],
      category: "Desktop Apps",
      status: "Completed",
      features: ["Student Records", "Grade Management", "Role-based Access", "Report Generation"]
    },
    {
      id: 5,
      title: "E-commerce Website with Payment Integration",
      description: "A full-stack e-commerce solution with modern design and secure payment processing. Currently in development with focus on user experience and performance.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full-Stack",
      status: "In Progress",
      features: ["Product Catalog", "Payment Processing", "Order Management", "Admin Dashboard"]
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "A cross-platform mobile application providing real-time weather information with beautiful UI and location-based forecasts.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React Native", "Weather API", "Redux"],
      category: "Mobile Apps",
      status: "Completed",
      features: ["Real-time Weather", "Location-based", "5-day Forecast", "Weather Alerts"]
    },
    {
      id: 7,
      title: "Task Management Dashboard",
      description: "A comprehensive web dashboard featuring Kanban boards, analytics, and team collaboration tools for project management.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Express.js", "PostgreSQL", "Chart.js"],
      category: "Dashboards",
      status: "Completed",
      features: ["Kanban Boards", "Team Collaboration", "Analytics", "Time Tracking"]
    },
    {
      id: 8,
      title: "Social Media Analytics Tool",
      description: "A powerful analytics dashboard for social media performance tracking with data visualization and reporting capabilities.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Python", "D3.js", "API Integration"],
      category: "Dashboards",
      status: "In Progress",
      features: ["Performance Analytics", "Data Visualization", "Multi-platform", "Automated Reports"]
    },
    {
      id: 9,
      title: "Personal Finance Tracker",
      description: "A comprehensive personal finance management application with expense tracking, budgeting, and financial goal setting.",
      image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Flutter", "Firebase", "Charts"],
      category: "Mobile Apps",
      status: "Completed",
      features: ["Expense Tracking", "Budget Planning", "Goal Setting", "Financial Reports"]
    }
  ];

  const filters: string[] = ['All', 'Mobile Apps', 'Web Apps', 'Full-Stack', 'Content Creation', 'Dashboards', 'Desktop Apps'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Category icon mapping
  const categoryIcons: Record<string, any> = {
    'Mobile Apps': Smartphone,
    'Web Apps': Globe,
    'Content Creation': Video,
    'Full-Stack': Database,
    'Dashboards': BarChart,
    'Desktop Apps': Globe
  };

  const getCategoryIcon = (category: string) => categoryIcons[category] || Globe;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-800 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">My Projects</h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              A showcase of my work in web development, mobile apps, and content creation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Filter className="w-6 h-6 text-gray-600 mt-2" />
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence>
            <div className="space-y-20">
              {filteredProjects.map(project => {
                const CategoryIcon = getCategoryIcon(project.category);
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group w-full max-w-7xl mx-auto"
                    whileHover={{ y: -10 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px]">
                      {/* Project Image */}
                      <div className="relative h-80 lg:h-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-6 left-6">
                          <span className={`px-4 py-2 text-sm font-medium rounded-full ${
                            project.status === 'Completed'
                              ? 'bg-green-500 text-white'
                              : project.status === 'In Progress'
                              ? 'bg-orange-500 text-white'
                              : 'bg-blue-500 text-white'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="absolute top-6 right-6">
                          <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                            <CategoryIcon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <button className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors">
                            <ExternalLink className="w-6 h-6 text-white" />
                          </button>
                          <button className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors">
                            <Github className="w-6 h-6 text-white" />
                          </button>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center bg-white dark:bg-gray-800">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg text-orange-600 font-semibold">{project.category}</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">{project.description}</p>

                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {project.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                                <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-800 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to help bring your ideas to life with modern technology and creative solutions.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 hover:bg-orange-600 hover:text-white font-semibold rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
              <ExternalLink className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
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

export default Projects;
