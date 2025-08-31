import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Database, Settings, Palette, TrendingUp, Video, Mail, Phone } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "Java", level: 90, description: "Object-oriented programming, Android development" },
        { name: "JavaScript", level: 85, description: "ES6+, React, Node.js, modern frameworks" },
        { name: "Python", level: 80, description: "Data analysis, automation, backend development" },
        { name: "C++", level: 75, description: "System programming, algorithms, data structures" },
        { name: "PHP", level: 85, description: "Server-side scripting, web applications" }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-green-500 to-blue-500",
      skills: [
        { name: "HTML/CSS", level: 95, description: "Semantic markup, responsive design, animations" },
        { name: "React", level: 90, description: "Hooks, Context API, component architecture" },
        { name: "Vue.js", level: 80, description: "Composition API, Vuex, component design" },
        { name: "Node.js", level: 85, description: "Express, API development, server-side logic" },
        { name: "WordPress", level: 80, description: "Custom themes, plugins, content management" }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Android Development", level: 90, description: "Native apps, Material Design, Firebase" },
        { name: "React Native", level: 75, description: "Cross-platform development, navigation" },
        { name: "Flutter", level: 70, description: "Dart, widgets, cross-platform UI" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "MySQL", level: 90, description: "Complex queries, optimization, design" },
        { name: "Firebase", level: 85, description: "Realtime database, authentication, hosting" },
        { name: "MongoDB", level: 80, description: "NoSQL, aggregation, document modeling" },
        { name: "PostgreSQL", level: 75, description: "Advanced SQL, performance tuning" },
        { name: "SQLite", level: 85, description: "Mobile databases, lightweight solutions" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      color: "from-red-300 to-red-800",
      skills: [
        { name: "Git", level: 90, description: "Version control, branching, collaboration" },
        { name: "VS Code", level: 95, description: "Extensions, debugging, productivity" },
        { name: "Android Studio", level: 85, description: "IDE mastery, debugging, testing" },
        { name: "Linux", level: 80, description: "Command line, server management" },
        { name: "Windows", level: 90, description: "Desktop applications, system administration" }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      color: "from-pink-500 to-purple-500",
      skills: [
        { name: "UI/UX Design", level: 80, description: "User experience, wireframing, prototyping" },
        { name: "Responsive Design", level: 90, description: "Mobile-first, grid systems, flexbox" },
        { name: "Material Design", level: 85, description: "Google's design principles" },
        { name: "Tailwind CSS", level: 90, description: "Utility-first CSS framework" }
      ]
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      color: "from-teal-500 to-green-500",
      skills: [
        { name: "SEO", level: 85, description: "On-page, technical, keyword research" },
        { name: "Social Media Marketing", level: 80, description: "Content strategy, engagement" },
        { name: "Content Strategy", level: 85, description: "Planning, creation, optimization" },
        { name: "Analytics", level: 80, description: "Google Analytics, data interpretation" }
      ]
    },
    {
      title: "Content Creation",
      icon: Video,
      color: "from-red-500 to-orange-500",
      skills: [
        { name: "Video Editing", level: 75, description: "Short-form content, educational videos" },
        { name: "Educational Content", level: 90, description: "Programming tutorials, tech tips" },
        { name: "Social Media Content", level: 85, description: "TikTok, engaging formats" },
        { name: "Technical Writing", level: 80, description: "Documentation, tutorials" }
      ]
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
              Skills & Expertise
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              A comprehensive overview of my technical skills and capabilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
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
              Technical Proficiency
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From front-end development to database management, mobile apps to digital marketing,
              I bring a diverse skill set to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-800 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Skills */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Skills Portfolio
            </h2>
            <p className="text-lg text-gray-600">
              Hover over each skill to learn more about my experience and capabilities
            </p>
          </motion.div>

          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {skill.name}
                      </h4>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-600 mr-2">
                          {skill.level}%
                        </span>
                        <div className="w-12 h-2 bg-gray-200 rounded-full">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            animate={{ 
                              width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : '0%'
                            }}
                            transition={{ duration: 0.8 }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <motion.p 
                      className="text-gray-600 text-sm leading-relaxed"
                      initial={{ opacity: 0.7 }}
                      animate={{ 
                        opacity: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 1 : 0.7 
                      }}
                    >
                      {skill.description}
                    </motion.p>

                    {/* Hover effect background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 pointer-events-none`}
                      animate={{
                        opacity: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 0.05 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Glow effect */}
                    {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-xl blur opacity-25`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.25 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning & Growth */}
       <section className="py-20 bg-gradient-to-br from-orange-600 via-blue-400 to-blue-900 text-white">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Continuous Learning Journey
            </h2>
            <p className="text-xl text-white mb-8">
              Technology evolves rapidly, and so do I. I'm committed to staying current with 
              the latest trends, tools, and best practices in the industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { title: "Currently Learning", items: ["Advanced React Patterns", "Cloud Architecture", "AI/ML Fundamentals"] },
                { title: "Next Goals", items: ["DevOps & CI/CD", "Microservices", "Blockchain Development"] },
                { title: "Teaching", items: ["TECH+ Content", "Mentoring Students", "Open Source Contributions"] }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-orange-600">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
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

export default Skills;