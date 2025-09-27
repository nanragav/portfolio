'use client'

export default function Projects() {
  const projects = [
    {
      title: "HRM-Backend API System",
      description: "Enterprise-grade RESTful backend system for Human Resource Management. Features JWT authentication, role-based access control, database optimization, and scalable microservices architecture with comprehensive API documentation.",
      technologies: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "JWT"],
      github: "https://github.com/nanragav/HRM-Backend",
      demo: "#",
      icon: "�",
      category: "Backend System",
      status: "Open Source"
    },
    {
      title: "Production Backend Infrastructure",
      description: "High-performance backend system architected for production environments. Features optimized database queries, Redis caching, Nginx load balancing, and comprehensive API monitoring with automated scaling capabilities.",
      technologies: ["Python", "FastAPI", "Nginx", "Redis"],
      github: "#private",
      demo: "#",
      icon: "⚡",
      category: "Backend System",
      status: "Client Project"
    },
    {
      title: "SQLmap-GUI Security Tool",
      description: "Advanced Python-based GUI wrapper for sqlmap with complete API integration. Features automated vulnerability scanning, detailed reporting, and secure database interaction testing for penetration testing workflows.",
      technologies: ["Python", "PyQt", "SQLmap", "API Security"],
      github: "https://github.com/nanragav/SQLmap-GUI",
      demo: "#",
      icon: "�️",
      category: "Security Tool",
      status: "Open Source"
    },
    {
      title: "DotDotPwn Vulnerability Scanner",
      description: "Python-based directory traversal vulnerability scanner with advanced backend security testing capabilities. Features automated API endpoint scanning and comprehensive vulnerability assessment reporting.",
      technologies: ["Python", "Security Testing", "API Security", "Vulnerability Assessment"],
      github: "https://github.com/nanragav/dotdotpwn-python",
      demo: "#",
      icon: "�",
      category: "Security Tool",
      status: "Open Source"
    },
    {
      title: "Aircalc Backend API",
      description: "Backend API system for engineering calculations used by Dynavac India's sales team. Features secure authentication, data processing APIs, and integration with external services for field engineering applications.",
      technologies: ["Python", "FastAPI", "OAuth", "API Integration"],
      github: "#private",
      demo: "#",
      icon: "📊",
      category: "Backend API",
      status: "Client Project"
    },
    {
      title: "Task Management Backend",
      description: "Scalable backend system for task management applications. Features real-time notifications API, user authentication, data synchronization, and cross-platform API support with comprehensive documentation.",
      technologies: ["Python", "FastAPI", "WebSockets", "API Design"],
      github: "https://github.com/nanragav/RemindMe",
      demo: "#",
      icon: "📋",
      category: "Backend API",
      status: "Open Source"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open Source":
        return "bg-green-500/10 text-green-400 border-green-500/30"
      case "Client Project":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30"
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-dark-bg to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Here's a collection of backend systems and APIs that demonstrate my expertise in server-side development. 
            From scalable microservices to security tools, each project showcases robust architecture and clean code principles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="relative p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-3xl border border-blue-500/30">
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-purple-400 text-sm font-medium mb-3">{project.category}</p>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>
              </div>
              
              {/* Technologies */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/30 hover:bg-blue-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 text-xs bg-gray-500/10 text-gray-400 rounded-full border border-gray-500/30">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="px-6 pb-6">
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                      project.github === '#private' 
                        ? 'bg-gray-700/50 text-gray-400 cursor-not-allowed border border-gray-600' 
                        : 'border border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-glow'
                    }`}
                    {...(project.github === '#private' && { onClick: (e) => e.preventDefault() })}
                  >
                    <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {project.github === '#private' ? 'Private' : 'View Code'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Freelance & Open Source Info */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-3xl p-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
              🚀
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Open to New Opportunities</h3>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              I'm passionate about contributing to open source projects and taking on freelance work. 
              Whether it's building innovative tools, contributing to existing projects, or working on custom solutions, 
              I'm always excited to collaborate on projects that make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full border border-green-500/30">
                🌟 Open Source Contributor
              </span>
              <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/30">
                💼 Available for Freelance
              </span>
              <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/30">
                🎯 Learning & Building
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/nanragav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View All on GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-400 bg-transparent hover:bg-blue-500 hover:text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Let's Collaborate
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}