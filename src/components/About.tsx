import { getIconPath } from '@/utils/assets';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-dark-bg to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 bg-gray-800 rounded-3xl relative overflow-hidden border-2 border-gray-700">
                <img 
                  src={getIconPath('profile.svg')}
                  alt="Sri Ragavendra Bharath" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl leading-relaxed mb-6">
                Hey there! I'm a passionate <span className="text-blue-400 font-semibold">Backend Python Developer</span> who 
                specializes in building robust server-side systems and scalable APIs. Currently architecting 
                powerful backend solutions at <span className="text-purple-400 font-semibold"> Dynavac India</span>, where I design 
                systems that handle complex business logic and high-performance requirements.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                My journey in tech started with a fascination for server-side architecture and data processing. 
                I discovered Python and was captivated by its elegance for backend development. From there, 
                I specialized in frameworks like <span className="text-blue-400">FastAPI</span>, mastering 
                database design, API architecture, and building systems that can scale to handle millions of requests.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                My expertise lies in the server-side realm - designing efficient database schemas, creating secure 
                authentication systems, optimizing query performance, and building <span className="text-blue-400">microservices</span> 
                that communicate seamlessly. I'm passionate about clean code architecture, automated testing, 
                and creating backend systems that are both powerful and maintainable.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 hover:bg-blue-500/20 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">API Architect</h3>
                    <p className="text-gray-400 text-sm">Designing scalable REST APIs</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 hover:bg-purple-500/20 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Database Expert</h3>
                    <p className="text-gray-400 text-sm">Optimizing data architecture</p>
                  </div>
                </div>
              </div>

              <div className="bg-pink-500/10 border border-pink-500/30 rounded-2xl p-6 hover:bg-pink-500/20 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Team Player</h3>
                    <p className="text-gray-400 text-sm">Collaborate to create magic</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 hover:bg-green-500/20 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Performance Focused</h3>
                    <p className="text-gray-400 text-sm">Optimizing server performance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <p className="text-gray-400 mb-4">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or thinking about the next big problem to solve.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
              >
                Let's build something amazing together
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