'use client'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float delay-2000"></div>
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto px-4">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
              Hi, I'm{' '}
              <span className="gradient-text block mt-4">
                Sri Ragavendra Bharath
              </span>
            </h1>
          </div>
          
          {/* Subtitle with Typing Effect */}
          <div className="mb-8 animate-slide-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-4">
              Backend Python Developer & API Architect
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-400">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">FastAPI</span>
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">PostgreSQL</span>
              <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full">Microservices</span>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-12 animate-slide-up delay-200">
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Designing and building high-performance backend systems, RESTful APIs, and scalable server architectures. 
              Currently working at <span className="text-blue-400 font-semibold">Dynavac India</span>, 
              creating robust server-side solutions that power modern applications.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up delay-400">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 bg-transparent hover:bg-blue-500 hover:text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 animate-fade-in delay-600 mb-20">
            <a
              href="https://github.com/nanragav"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-2xl transition-all duration-300 hover:scale-110"
            >
              <svg className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sriragavendrabharath/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-blue-600/20 hover:bg-blue-600/30 rounded-2xl transition-all duration-300 hover:scale-110"
            >
              <svg className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:sriragavendrabharath@outlook.com"
              className="group p-4 bg-purple-600/20 hover:bg-purple-600/30 rounded-2xl transition-all duration-300 hover:scale-110"
            >
              <svg className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator - positioned separately with more space */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}