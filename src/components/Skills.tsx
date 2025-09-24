export default function Skills() {
  const skillCategories = [
    {
      title: "Backend & API Development",
      icon: "🔧",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "FastAPI", icon: "⚡" },
        { name: "SQLAlchemy", icon: "🗃️" },
        { name: "REST APIs", icon: "🌐" },
        { name: "PyUnit", icon: "🧪" },
        { name: "Authentication", icon: "🔐" }
      ],
      color: "blue"
    },
    {
      title: "Databases & Cloud",
      icon: "☁️",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "💾" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Azure", icon: "☁️" },
        { name: "Firebase", icon: "🔥" },
        { name: "Redis", icon: "⚡" }
      ],
      color: "purple"
    },
    {
      title: "Mobile & Frontend",
      icon: "📱",
      skills: [
        { name: "Flutter", icon: "🦋" },
        { name: "Dart", icon: "🎯" },
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Responsive Design", icon: "📐" }
      ],
      color: "pink"
    },
    {
      title: "DevOps & Security",
      icon: "🔒",
      skills: [
        { name: "Docker", icon: "🐳" },
        { name: "Git/GitHub", icon: "📦" },
        { name: "Linux", icon: "🐧" },
        { name: "Security Testing", icon: "🛡️" },
        { name: "CI/CD", icon: "🔄" },
        { name: "Nginx", icon: "🌐" }
      ],
      color: "green"
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
            I love working with modern technologies to build scalable, secure, and user-friendly applications. 
            Here are the tools and technologies I'm passionate about.
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