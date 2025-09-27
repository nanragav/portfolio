'use client'

export default function Projects() {
  const projects = [
    {
      title: "HRM Backend System",
      description: "RESTful backend system with authentication, attendance management, and role-based access control (RBAC) using FastAPI and SQLAlchemy. Designed scalable database models with MySQL and optimized queries for performance with modular architecture.",
      technologies: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "RBAC", "Authentication"],
      github: "https://github.com/nanragav/HRM-Backend",
      demo: "#",
      icon: "👥",
      category: "Enterprise System",
      status: "Open Source",
      highlights: ["RBAC Implementation", "MySQL Optimization", "Modular Architecture"],
      year: "2024"
    },
    {
      title: "FastAPI + Supabase Backend",
      description: "Backend system designed and deployed using FastAPI and Supabase with secure authentication, API endpoints, and data models. Features real-time updates and improved performance handling concurrent requests efficiently with async programming.",
      technologies: ["Python", "FastAPI", "Supabase", "Async Programming", "Authentication"],
      github: "#private",
      demo: "#",
      icon: "⚡",
      category: "Web Application",
      status: "Production",
      highlights: ["Real-time Updates", "Async Programming", "Concurrent Requests"],
      year: "2024"
    },
    {
      title: "SQLmap-GUI Wrapper",
      description: "GUI wrapper for SQLmap exposing its full set of options through an intuitive interface. Enables testers to construct complex SQL injection tests without command-line usage, optimized for low system resource usage on lightweight servers.",
      technologies: ["Python", "PyQt", "SQLmap", "GUI Design", "Security Testing"],
      github: "https://github.com/nanragav/SQLmap-GUI",
      demo: "#",
      icon: "🔒",
      category: "Security Tool",
      status: "Open Source",
      highlights: ["Intuitive GUI", "Full SQLmap Options", "Resource Optimized"],
      year: "2023"
    },
    {
      title: "PyDotPwn Security Tool",
      description: "Python-based security testing tool with API + GUI for automated path traversal detection. Features custom payload generation and logging for detailed vulnerability reports with lightweight performance for CI/CD environments.",
      technologies: ["Python", "GUI Development", "Security Testing", "API Integration", "Automation"],
      github: "https://github.com/nanragav/PyDotPwn",
      demo: "#",
      icon: "🛡️",
      category: "Security Tool",
      status: "Open Source",
      highlights: ["Path Traversal Detection", "Custom Payloads", "CI/CD Ready"],
      year: "2023"
    },
    {
      title: "Engineering Calculation API",
      description: "Backend API system for complex engineering calculations used by industrial sales teams. Features secure authentication, real-time computation APIs, and integration with external engineering databases.",
      technologies: ["Python", "FastAPI", "NumPy", "OAuth", "API Integration"],
      github: "#private",
      demo: "#",
      icon: "🔧",
      category: "Industry Solution",
      status: "Client Project",
      highlights: ["Real-time Calculations", "External Integrations", "Industry-specific"],
      year: "2024"
    },
    {
      title: "Log Analysis & Monitoring",
      description: "Built real-time dashboards for server monitoring and anomaly detection using Splunk. Designed alert systems to notify teams of performance bottlenecks and security risks with automated log ingestion pipelines.",
      technologies: ["Splunk", "Dashboard Design", "Real-time Monitoring", "Alert Systems", "Log Analysis"],
      github: "#private",
      demo: "#",
      icon: "�",
      category: "Monitoring Solution",
      status: "Production",
      highlights: ["Real-time Dashboards", "Anomaly Detection", "Automated Alerts"],
      year: "2024"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open Source":
        return "badge-success"
      case "Production":
        return "badge-primary"
      case "Client Project":
        return "badge-secondary"
      default:
        return "badge"
    }
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      "Enterprise System": "🏢",
      "Infrastructure": "🏗️",
      "Security Tool": "🔐",
      "Industry Solution": "⚙️",
      "Productivity Tool": "📊"
    }
    return icons[category as keyof typeof icons] || "💼"
  }

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-purple-100/30 to-emerald-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-lg gradient-text mb-6">
            Featured Projects
          </h2>
          <div className="section-divider w-24 mx-auto mb-6"></div>
          <p className="text-body max-w-4xl mx-auto text-lg">
            Discover my backend engineering journey through these carefully crafted projects. From scalable APIs 
            to security tools, each project represents a commitment to excellence in server-side development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group hover:shadow-xl transition-all duration-500"
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center text-2xl border border-slate-200/60 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`${getStatusColor(project.status)} text-xs`}>
                      {project.status}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{project.year}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm">{getCategoryIcon(project.category)}</span>
                  <span className="text-slate-600 text-sm font-medium">{project.category}</span>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.highlights.slice(0, 3).map((highlight, hIndex) => (
                    <span
                      key={hIndex}
                      className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-md border border-blue-100"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="badge text-xs">
                      +{project.technologies.length - 4}
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
                    className={`flex-1 text-center py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                      project.github === '#private' 
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200' 
                        : 'btn-outline hover:bg-slate-800 hover:text-white hover:border-slate-800'
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

        {/* Open Source & Collaboration Section */}
        <div className="glass-effect p-8 md:p-12 rounded-3xl mb-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-3xl mx-auto mb-6">
            🚀
          </div>
          <h3 className="heading-md text-slate-800 mb-4">Open to Collaboration</h3>
          <p className="text-body text-lg mb-8 max-w-3xl mx-auto">
            I believe in the power of open source and collaborative development. Whether it's contributing to 
            existing projects, building innovative tools, or working on custom backend solutions, I'm always 
            excited to collaborate with fellow developers and organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="badge-success flex items-center">
              <span className="mr-2">🌟</span>
              Open Source Advocate
            </span>
            <span className="badge-primary flex items-center">
              <span className="mr-2">💼</span>
              Freelance Available
            </span>
            <span className="badge-secondary flex items-center">
              <span className="mr-2">🎯</span>
              Always Learning
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/nanragav"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View All Projects
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-secondary group"
            >
              Let's Collaborate
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}