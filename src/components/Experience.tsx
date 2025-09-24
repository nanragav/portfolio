export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Dynavac India Pvt Ltd",
      period: "Oct 2024 - Present",
      location: "Coimbatore, India",
      description: [
        "Building innovative internal tools and automation systems using Python to streamline operations",
        "Developing and maintaining robust backend services for both mobile and desktop applications",
        "Collaborating closely with teams to understand workflows and create tailored technical solutions",
        "Creating production-ready Flutter applications with Firebase integration and OAuth authentication for the sales team"
      ],
      technologies: ["Python", "Flutter", "Firebase", "OAuth", "Automation", "Backend Services"],
      icon: "🏢",
      color: "blue",
      current: true
    },
    {
      title: "Lab Assistant (Volunteer)",
      company: "Park's College",
      period: "Nov 2023 - Mar 2024",
      location: "Tirupur, Tamil Nadu",
      description: [
        "Mentored students in Python programming, networking concepts, and database design",
        "Guided practical implementation of academic projects and software development best practices",
        "Supported peers in debugging complex programming challenges and system architecture decisions",
        "Contributed to creating a collaborative learning environment for emerging developers"
      ],
      technologies: ["Python", "Networking", "Database Systems", "Teaching", "Mentoring"],
      icon: "🎓",
      color: "green",
      current: false
    },
    {
      title: "Freelance Developer",
      company: "Independent Projects",
      period: "2023 - 2024",
      location: "Remote",
      description: [
        "Delivered custom backend solutions using FastAPI and PostgreSQL for diverse client needs",
        "Developed specialized security testing tools and GUI applications for penetration testing workflows",
        "Created cross-platform mobile applications with Flutter, focusing on user experience and performance",
        "Implemented comprehensive log analysis systems using Splunk for performance monitoring and insights"
      ],
      technologies: ["FastAPI", "PostgreSQL", "Flutter", "Security Testing", "Splunk"],
      icon: "💻",
      color: "purple",
      current: false
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        text: "text-blue-400",
        accent: "bg-blue-500"
      },
      green: {
        bg: "bg-green-500/10",
        border: "border-green-500/30",
        text: "text-green-400",
        accent: "bg-green-500"
      },
      purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        text: "text-purple-400",
        accent: "bg-purple-500"
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 to-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My career journey reflects a passion for continuous learning and building impactful solutions. 
            From volunteer teaching to enterprise development, each role has shaped my perspective on technology and teamwork.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colorClasses = getColorClasses(exp.color)
              return (
                <div 
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-6 w-4 h-4 ${colorClasses.accent} rounded-full border-4 border-gray-900 z-10`}></div>
                  
                  {/* Content Card */}
                  <div className="ml-20">
                    <div className={`${colorClasses.bg} ${colorClasses.border} border rounded-3xl p-8 hover:bg-opacity-20 transition-all duration-300 group hover:scale-105 hover:shadow-2xl`}>
                      
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center text-3xl border ${colorClasses.border}`}>
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                              {exp.title}
                            </h3>
                            <p className={`${colorClasses.text} font-semibold text-lg`}>
                              {exp.company}
                            </p>
                            <div className="flex items-center space-x-4 mt-2 text-gray-400">
                              <span className="flex items-center space-x-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{exp.period}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{exp.location}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 ${colorClasses.accent} rounded-full mt-2 flex-shrink-0`}></div>
                              <span className="text-gray-300 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 text-xs ${colorClasses.bg} ${colorClasses.text} rounded-full border ${colorClasses.border} hover:bg-opacity-30 transition-colors`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Challenges</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new projects and collaborate with amazing teams. 
              Whether it's building innovative solutions, contributing to open source, or tackling complex technical challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/sriragavendrabharath/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-400 bg-transparent hover:bg-blue-500 hover:text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}