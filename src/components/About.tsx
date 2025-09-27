import { getIconPath } from '@/utils/assets';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-emerald-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-lg gradient-text mb-6">
            About Me
          </h2>
          <div className="section-divider w-24 mx-auto mb-6"></div>
          <p className="text-body max-w-2xl mx-auto">
            Passionate about building scalable backend systems and crafting elegant server-side solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-80 h-80 card-glass rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
                <img 
                  src={getIconPath('profile.svg')}
                  alt="Ragav Nandhakumar" 
                  className="w-full h-full object-cover relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-body text-lg leading-relaxed">
                Hey there! I'm <span className="gradient-text font-semibold">Sri Ragavendra Bharath</span>, a passionate 
                Backend Python Developer who specializes in building robust, scalable server-side systems and APIs. 
                Currently pursuing my Master's in Computer Science at Park's College while working as a Python Backend 
                Developer at Dynavac India Pvt Ltd, where I architect powerful backend solutions that handle 
                complex business logic and high-performance requirements.
              </p>
              
              <p className="text-body leading-relaxed">
                My journey in tech began during my Bachelor's in Computer Science at Park's College, Tirupur, where 
                I developed a fascination for server-side architecture and data processing. I discovered Python's 
                elegance for backend development and specialized in frameworks like <span className="text-blue-600 font-medium">FastAPI</span> and 
                <span className="text-purple-600 font-medium"> SQLAlchemy</span>, mastering database design, API architecture, 
                and building systems that scale beautifully.
              </p>
              
              <p className="text-body leading-relaxed">
                I specialize in modern Python frameworks like <span className="text-blue-600 font-medium">FastAPI</span>, 
                coupled with robust databases like <span className="text-emerald-600 font-medium">PostgreSQL</span> and 
                <span className="text-purple-600 font-medium"> MySQL</span>. My focus is on creating secure, maintainable 
                backend systems with proper authentication, optimized database queries, and scalable architecture. 
                I'm also passionate about security testing and have developed several tools for vulnerability assessment.
              </p>
            </div>

            {/* Key Specialties */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card-glass p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">API Architecture</h3>
                    <p className="text-slate-600 text-sm">RESTful & GraphQL APIs</p>
                  </div>
                </div>
              </div>

              <div className="card-glass p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Database Design</h3>
                    <p className="text-slate-600 text-sm">PostgreSQL & MySQL</p>
                  </div>
                </div>
              </div>

              <div className="card-glass p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Microservices</h3>
                    <p className="text-slate-600 text-sm">Docker & Kubernetes</p>
                  </div>
                </div>
              </div>

              <div className="card-glass p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Performance</h3>
                    <p className="text-slate-600 text-sm">Optimization & Caching</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Philosophy */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                My Approach
              </h3>
              <p className="text-slate-600">
                I believe in writing clean, maintainable code that tells a story. Every API endpoint, every database 
                query, and every microservice should serve a clear purpose and scale gracefully. My goal is to build 
                systems that are not just functional, but elegant and future-proof.
              </p>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <a
                href="#contact"
                className="btn-primary group inline-flex items-center"
              >
                Let's Build Something Amazing
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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