export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "⚡",
      description: "Building robust server-side applications",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "FastAPI", level: 90, icon: "⚡" },
        { name: "Django", level: 85, icon: "🎯" },
        { name: "SQLAlchemy", level: 88, icon: "🗃️" },
        { name: "REST APIs", level: 92, icon: "🌐" },
        { name: "GraphQL", level: 75, icon: "📊" }
      ],
      color: "blue"
    },
    {
      title: "Databases & Storage",
      icon: "💾",
      description: "Data architecture and optimization",
      skills: [
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Redis", level: 85, icon: "⚡" },
        { name: "Database Design", level: 88, icon: "🏗️" },
        { name: "Query Optimization", level: 82, icon: "🎯" },
        { name: "Data Modeling", level: 85, icon: "📊" }
      ],
      color: "purple"
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      description: "Infrastructure and deployment solutions",
      skills: [
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Azure", level: 80, icon: "☁️" },
        { name: "Linux", level: 88, icon: "🐧" },
        { name: "Nginx", level: 75, icon: "🌐" },
        { name: "CI/CD", level: 78, icon: "🔄" },
        { name: "Kubernetes", level: 70, icon: "⚙️" }
      ],
      color: "emerald"
    },
    {
      title: "Tools & Security",
      icon: "🔒",
      description: "Development tools and security practices",
      skills: [
        { name: "Git/GitHub", level: 95, icon: "📦" },
        { name: "Postman", level: 92, icon: "📡" },
        { name: "JWT Auth", level: 88, icon: "🔐" },
        { name: "API Security", level: 85, icon: "🛡️" },
        { name: "Testing", level: 82, icon: "🧪" },
        { name: "Monitoring", level: 78, icon: "📈" }
      ],
      color: "indigo"
    }
  ]

  const certifications = [
    {
      name: "Azure Fundamentals",
      provider: "Microsoft",
      code: "AZ-900",
      icon: "☁️",
      color: "blue",
      status: "Certified"
    },
    {
      name: "Data Analysis",
      provider: "Brookers Academy",
      code: "Professional Certificate",
      icon: "📊",
      color: "emerald",
      status: "Certified"
    },
    {
      name: "Python Backend",
      provider: "Self-Taught",
      code: "3+ Years Experience",
      icon: "🐍",
      color: "purple",
      status: "Expert"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50/80",
        border: "border-blue-200/60",
        hover: "hover:bg-blue-100/60",
        text: "text-blue-700",
        accent: "bg-blue-100",
        progress: "bg-gradient-to-r from-blue-500 to-blue-600"
      },
      purple: {
        bg: "bg-purple-50/80",
        border: "border-purple-200/60",
        hover: "hover:bg-purple-100/60",
        text: "text-purple-700",
        accent: "bg-purple-100",
        progress: "bg-gradient-to-r from-purple-500 to-purple-600"
      },
      emerald: {
        bg: "bg-emerald-50/80",
        border: "border-emerald-200/60",
        hover: "hover:bg-emerald-100/60",
        text: "text-emerald-700",
        accent: "bg-emerald-100",
        progress: "bg-gradient-to-r from-emerald-500 to-emerald-600"
      },
      indigo: {
        bg: "bg-indigo-50/80",
        border: "border-indigo-200/60",
        hover: "hover:bg-indigo-100/60",
        text: "text-indigo-700",
        accent: "bg-indigo-100",
        progress: "bg-gradient-to-r from-indigo-500 to-indigo-600"
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }
  const skillCategories = [
    {
      title: "Backend & API Development",
      icon: "🔧",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "FastAPI", icon: "⚡" },
        { name: "SQLAlchemy", icon: "🗃️" },
        { name: "REST APIs", icon: "🌐" },
        { name: "GraphQL", icon: "📊" },
        { name: "Microservices", icon: "🏗️" }
      ],
      color: "blue"
    },
    {
      title: "Databases & Storage",
      icon: "💾",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "💾" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "⚡" },
        { name: "Database Design", icon: "�️" },
        { name: "Query Optimization", icon: "🎯" }
      ],
      color: "purple"
    },
    {
      title: "Cloud & Infrastructure",
      icon: "☁️",
      skills: [
        { name: "Azure", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Linux", icon: "🐧" },
        { name: "Nginx", icon: "🌐" },
        { name: "Server Architecture", icon: "�️" },
        { name: "Load Balancing", icon: "⚖️" }
      ],
      color: "green"
    },
    {
      title: "DevOps & Security",
      icon: "🔒",
      skills: [
        { name: "CI/CD", icon: "�" },
        { name: "Git/GitHub", icon: "📦" },
        { name: "Security Testing", icon: "�️" },
        { name: "API Security", icon: "�" },
        { name: "Automated Testing", icon: "🧪" },
        { name: "Performance Monitoring", icon: "📈" }
      ],
      color: "red"
    }
  ]

  const certifications = [
    {
      name: "Azure Fundamentals",
      code: "AZ-900",
      icon: "☁️",
      color: "blue"
    },
    {
      name: "Data Analyst",
      code: "Brookers Academy",
      icon: "📊",
      color: "green"
    },
    {
      name: "CEH (In Progress)",
      code: "Ethical Hacking",
      icon: "🛡️",
      color: "red"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        hover: "hover:bg-blue-500/20",
        text: "text-blue-400",
        accent: "bg-blue-500/20"
      },
      purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        hover: "hover:bg-purple-500/20",
        text: "text-purple-400",
        accent: "bg-purple-500/20"
      },
      pink: {
        bg: "bg-pink-500/10",
        border: "border-pink-500/30",
        hover: "hover:bg-pink-500/20",
        text: "text-pink-400",
        accent: "bg-pink-500/20"
      },
      green: {
        bg: "bg-green-500/10",
        border: "border-green-500/30",
        hover: "hover:bg-green-500/20",
        text: "text-green-400",
        accent: "bg-green-500/20"
      },
      red: {
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        hover: "hover:bg-red-500/20",
        text: "text-red-400",
        accent: "bg-red-500/20"
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I specialize in backend development with a focus on building scalable, secure, and high-performance server-side systems. 
            Here are the core technologies I use to create robust backend solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color)
            return (
              <div 
                key={categoryIndex} 
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-3xl p-8 ${colorClasses.hover} transition-all duration-300 transform hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${colorClasses.accent} rounded-2xl flex items-center justify-center text-2xl mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-2xl font-bold text-white`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="text-gray-200 font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Certifications & Learning
          </h3>
          <div className="flex justify-center gap-6">
            {certifications.map((cert, index) => {
              const colorClasses = getColorClasses(cert.color)
              return (
                <div 
                  key={index}
                  className={`${colorClasses.bg} ${colorClasses.border} border rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300`}
                >
                  <div className={`w-16 h-16 ${colorClasses.accent} rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}>
                    {cert.icon}
                  </div>
                  <h4 className="text-white font-bold mb-1">{cert.name}</h4>
                  <p className={`${colorClasses.text} text-sm`}>{cert.code}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Technologies */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Technologies I've Explored
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Supabase", "OAuth", "SQLmap", "Penetration Testing", "Automation Scripts", 
              "API Design", "Performance Optimization", "Log Analysis", "Gmail API", 
              "Selenium", "Data Science", "Networking", "Security Analysis", "Splunk",
              "Postman", "JWT", "WebSockets", "Microservices", "GraphQL"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-blue-500/50 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-12">
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Always learning, always growing. I believe in staying curious and exploring new technologies 
              that can solve real-world problems more effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}