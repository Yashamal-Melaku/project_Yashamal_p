import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Download, Mail, Phone } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "BSc in Information Technology",
      institution: "Haramaya University",
      period: "2021 - 2025",
      location: "Haramaya, Ethiopia",
      status: "In Progress",
      description: "Comprehensive study of information systems, software development, and emerging technologies. Focus on practical application of programming concepts and system design.",
      highlights: [
        "Software Engineering Principles",
        "Database Management Systems",
        "Web Development Technologies",
        "Mobile Application Development",
        "System Analysis & Design"
      ],
      gpa: "3.8/4.0",
      color: "from-blue-500 to-purple-600"
    }
  ];

  const certifications = [
    {
      title: "ALX ProDev (Front-End Program)",
      issuer: "ALX",
      period: "2024 - In Progress",
      description: "Intensive front-end development program focusing on modern JavaScript frameworks, responsive design, and industry best practices.",
      skills: ["React.js", "Advanced JavaScript", "Responsive Design", "API Integration", "Version Control"],
      color: "from-green-500 to-blue-500",
      certificate: "In Progress"
    },
    {
      title: "Android Developer Certificate",
      issuer: "Udacity",
      period: "2023",
      description: "Comprehensive Android development course covering native app development, Material Design, and Google Play Store deployment.",
      skills: ["Android SDK", "Java", "Material Design", "Firebase", "App Publishing"],
      color: "from-orange-500 to-red-500",
      certificate: "Completed"
    },
    {
      title: "CS50x - Introduction to Computer Science",
      issuer: "Harvard University (edX)",
      period: "2023 - In Progress",
      description: "Harvard's introduction to computer science and programming, covering algorithms, data structures, and multiple programming languages.",
      skills: ["C", "Python", "SQL", "JavaScript", "Computer Science Fundamentals"],
      color: "from-purple-500 to-pink-500",
      certificate: "In Progress"
    }
  ];

  const achievements = [
    {
      title: "Dean's List Recognition",
      description: "Maintained high academic standing throughout university career",
      year: "2022-2024"
    },
    {
      title: "Tech Content Creator",
      description: "Created educational programming content reaching 1000+ students",
      year: "2023-Present"
    },
    {
      title: "Project Leadership",
      description: "Led development of university property management system",
      year: "2023"
    }
  ];

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
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-orange-500" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Education & Learning
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              My academic journey and commitment to continuous learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Education */}
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
              Formal Education
            </h2>
            <p className="text-lg text-gray-600">
              Building a strong foundation in computer science and information technology
            </p>
          </motion.div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${edu.color} text-white`}>
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-blue-800 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-orange-500" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-orange-500" />
                        {edu.location}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Areas of Study:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Academic Performance
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700">Current GPA</span>
                            <span className="font-semibold text-blue-800">{edu.gpa}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full bg-gradient-to-r ${edu.color}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: '95%' }}
                              transition={{ duration: 1, delay: 0.5 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                        <div className="pt-4 border-t">
                          <p className="text-sm text-gray-600">
                            Expected Graduation: <strong>2025</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications & Courses */}
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
              Certifications & Courses
            </h2>
            <p className="text-lg text-gray-600">
              Continuous learning through specialized programs and certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} text-white mr-4`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {cert.title}
                    </h3>
                    <p className="text-blue-800 font-semibold">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4 text-gray-600">
                  <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                  {cert.period}
                  <span className={`ml-auto px-3 py-1 rounded-full text-xs font-medium ${
                    cert.certificate === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {cert.certificate}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.certificate === 'Completed' && (
                  <button className="flex items-center text-blue-800 hover:text-orange-500 font-medium text-sm transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    View Certificate
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learning Timeline
            </h2>
            <p className="text-lg text-gray-600">
              My educational journey and key milestones
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-orange-500"></div>

            <div className="space-y-8">
              {[
                { year: "2025", title: "BSc IT Completion", desc: "Graduating with Bachelor's degree", status: "upcoming" },
                { year: "2024", title: "ALX ProDev Program", desc: "Advanced front-end development specialization", status: "current" },
                { year: "2023", title: "CS50x & Android Certification", desc: "Harvard CS50x and Udacity Android Developer", status: "completed" },
                { year: "2021", title: "University Enrollment", desc: "Started BSc in Information Technology", status: "completed" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                    item.status === 'completed' ? 'bg-green-500' : 
                    item.status === 'current' ? 'bg-blue-500' : 'bg-gray-400'
                  }`}>
                    {item.year}
                  </div>
                  <div className="ml-8 bg-white rounded-xl shadow-lg p-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
     <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-800 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Academic Achievements
            </h2>
            <p className="text-xl text-blue-200">
              Recognition and milestones throughout my educational journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-blue-200 mb-2">
                  {achievement.description}
                </p>
                <span className="text-sm text-orange-300 font-medium">
                  {achievement.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-16 h-16 text-blue-800 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Learning Philosophy
            </h2>
            <blockquote className="text-xl text-gray-600 leading-relaxed italic mb-8">
              "Education is not just about acquiring knowledge—it's about developing 
              the ability to think critically, solve problems creatively, and adapt 
              to an ever-changing technological landscape. I believe in learning by 
              doing, teaching others, and staying curious about emerging technologies."
            </blockquote>
            <p className="text-lg text-gray-700 font-semibold">
              — My approach to continuous learning and growth
            </p>
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

export default Education;