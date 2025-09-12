import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Database, Settings, Palette, TrendingUp, Video, Mail, Phone, SmartphoneIcon, GrabIcon } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
   {
    title: "Programming Languages & Frameworks",
    icon: Code,
    color: "from-blue-500 to-purple-600",
    skills: [
      { name: "TypeScript", level: 90, description: "Strongly typed JavaScript for scalable front-end applications" },
      { name: "JavaScript", level: 90, description: "ES6+, modern frameworks, and interactive UIs" },
      { name: "React", level: 90, description: "Building dynamic, responsive, and component-based web applications" },
      { name: "HTML5", level: 95, description: "Semantic, accessible, and SEO-friendly markup" },
      { name: "CSS3", level: 90, description: "Responsive design, Flexbox, Grid, animations" }
    ]
  }
,
  {
    title: "Web Development",
    icon: Globe,
    color: "from-green-500 to-blue-500",
    skills: [
      { name: "HTML/CSS", level: 95, description: "Semantic markup, responsive design, Flexbox & Grid, animations" },
      { name: "JavaScript & TypeScript", level: 90, description: "ES6+, DOM manipulation, React, scalable front-end apps" },
      { name: "React", level: 90, description: "Hooks, Context API, component architecture, SPA development" },
      { name: "Tailwind CSS", level: 85, description: "Utility-first styling, responsive layouts, and custom components" },
      { name: "Framer Motion", level: 80, description: "Animations and motion effects for React applications" }
    ]
  }
,
{
    title: "Digital Marketing",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "SEO", level: 85, description: "On-page, technical SEO, keyword research, using Ahrefs & SEMrush" },
      { name: "Social Media Marketing", level: 90, description: "Content planning, engagement, and audience growth across TikTok, Instagram, LinkedIn" },
      { name: "Content Strategy", level: 85, description: "Planning, scheduling, and creating engaging digital content using Notion / Trello / Canva" },
      { name: "Analytics & Reporting", level: 80, description: "Google Analytics, Search Console, and performance tracking" },
      { name: "Email Marketing", level: 75, description: "Campaign creation, newsletters, and subscriber engagement using Mailchimp / ConvertKit" },
      { name: "Brand Management", level: 70, description: "Maintaining brand voice, consistency, and online presence" },
      { name: "Advertising Platforms", level: 80, description: "Facebook Ads, Google Ads, LinkedIn Ads for paid campaigns" },
      { name: "Marketing Automation", level: 75, description: "HubSpot, ActiveCampaign to automate workflows and campaigns" }
    ]
  }

,
{
    title: "Content Creation & Social Media Management",
    icon: SmartphoneIcon,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Educational Content", level: 90, description: "Programming tutorials, tech tips, and step-by-step guides" },
      { name: "Video Editing", level: 85, description: "Recording, editing, and publishing short-form and educational videos using Adobe Premiere / CapCut" },
      { name: "Blog & Technical Writing", level: 80, description: "Articles, documentation, tutorials, and guides" },
      { name: "Social Media Content", level: 85, description: "Planning, creating, and posting engaging content on TikTok, Instagram, and other platforms" },
      { name: "Community Engagement", level: 75, description: "Interacting with followers, answering questions, and building a tech community" },
      { name: "Social Media Management", level: 90, description: "Strategy, scheduling, analytics, and audience growth using Buffer / Hootsuite" },
      { name: "Content Strategy", level: 80, description: "Planning and organizing content for maximum reach and engagement" },
      { name: "Blogging Platforms", level: 80, description: "Medium, Dev.to, WordPress for publishing educational content" },
      { name: "Video Platforms", level: 85, description: "YouTube, TikTok for sharing tutorials and tech content" },
      { name: "Screen Recording Tools", level: 90, description: "OBS Studio and other recording tools for tutorial creation" }
    ]
  }

,
   {
  title: "Tools & Platforms",
  icon: Settings,
  color: "from-gray-600 to-gray-800",
  skills: [
    // Frontend & Web Development (high priority)
    { name: "VS Code", level: 95, description: "Extensions, debugging, productivity, front-end development" },
    { name: "Git & GitHub", level: 90, description: "Version control, branching, collaboration, repositories" },
    { name: "HTML5 & CSS3", level: 95, description: "Semantic markup, responsive design, Flexbox/Grid, animations" },
    { name: "JavaScript & TypeScript", level: 90, description: "ES6+, React, scalable front-end applications" },
    { name: "React", level: 90, description: "Hooks, Context API, component architecture, SPA development" },
    { name: "Tailwind CSS", level: 85, description: "Utility-first styling, responsive layouts, custom components" },
    { name: "Framer Motion", level: 80, description: "Animations and motion effects for React applications" },
    { name: "Lucide Icons", level: 85, description: "Reusable icon components for React projects" },
    { name: "Vite / Webpack", level: 85, description: "Modern bundlers for fast and optimized builds" },

    // Content Creation (next priority)
    { name: "OBS Studio / Screen Recording", level: 90, description: "Recording tutorials and educational videos" },
    { name: "Adobe Premiere / CapCut", level: 85, description: "Video editing, trimming, and publishing content" },
    { name: "Canva / Figma", level: 85, description: "Designing graphics, UI mockups, and visual content" },
    { name: "Blogging Platforms / Medium / Dev.to", level: 80, description: "Writing and publishing articles, guides, and educational content" },
    { name: "YouTube / TikTok", level: 85, description: "Creating and sharing tech tutorials and educational videos" },

    // Digital Marketing / Social Media Management (last priority)
    { name: "Social Media Scheduling (Buffer / Hootsuite)", level: 90, description: "Planning and posting content for engagement" },
    { name: "SEO Tools (Ahrefs / SEMrush)", level: 85, description: "Keyword research, on-page SEO, performance tracking" },
    { name: "Google Analytics / Search Console", level: 80, description: "Tracking website and campaign performance" },
    { name: "Email Marketing Tools (Mailchimp / ConvertKit)", level: 75, description: "Campaign creation, newsletters, and subscriber management" },
    { name: "Content Strategy Tools (Notion / Trello)", level: 80, description: "Planning, scheduling, and organizing content" }
  ]
}

,
    {
  title: "Design & UI/UX",
  icon: Palette,
  color: "from-pink-500 to-purple-500",
  skills: [
    { name: "UI/UX Design", level: 80, description: "User research, wireframing, prototyping, and interaction design" },
    { name: "Responsive Design", level: 90, description: "Mobile-first approach, grid systems, flexbox, and media queries" },
    { name: "Material Design", level: 85, description: "Google's design principles and guidelines for consistent UI" },
    { name: "Tailwind CSS", level: 90, description: "Utility-first CSS framework for fast, responsive layouts" },
    { name: "Figma / Adobe XD", level: 85, description: "Designing high-fidelity mockups, prototypes, and collaborative UI" }
  ]
}
,
    

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
              Skills & Expertise
            </h1>
            <p className="mb-8 text-xl text-blue-200 md:text-2xl">
              A comprehensive overview of my technical skills and capabilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
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
              Technical Proficiency
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
             From crafting modern front-end experiences to content creation, social media management, and digital marketing, I bring a diverse skill set to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="p-6 transition-all duration-300 bg-gray-50 rounded-2xl hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-blue-800">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
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

{/* Learning & Growth */}
<section className="relative flex flex-col items-center justify-start min-h-screen py-20 overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-blue-400 to-blue-900"></div>

  {/* Content above background */}
  <motion.div
    className="relative z-10 max-w-6xl mx-auto mt-10 text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {/* Heading */}
    <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
      Continuous Learning Journey
    </h2>
    <p className="mb-12 text-xl text-blue-200">
      Technology evolves rapidly, and so do I. I'm committed to staying current with 
      the latest trends, tools, and best practices in the industry.
    </p>

    {/* Grid */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {[
        {
          title: "Currently Learning",
          items: ["Advanced React Patterns", "Cloud Architecture", "AI/ML Fundamentals"]
        },
        {
          title: "Next Goals",
          items: ["DevOps & CI/CD", "Microservices", "Blockchain Development"]
        },
        {
          title: "Teaching",
          items: ["TECH+ Content", "Mentoring Professionals", "Open Source Contributions"]
        },
      ].map((section, index) => (
        <motion.div
          key={index}
          className="p-6 bg-white/10 backdrop-blur-md rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 text-xl font-semibold text-orange-300">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center">
                <div className="w-2 h-2 mr-3 bg-orange-500 rounded-full"></div>
                <span className="text-blue-100">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.div>
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

export default Skills;