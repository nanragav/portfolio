'use client'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      {/* Animated Background Elements - Light Theme */}
      <div className="absolute inset-0">
        {/* Soft gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/40 to-emerald-200/40 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-200/40 to-blue-200/40 rounded-full blur-3xl animate-pulse-gentle"></div>
        
        {/* Floating particles - subtle light theme */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/60 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400/60 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-emerald-400/60 rounded-full animate-float"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-indigo-400/60 rounded-full animate-float"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/2 left-10 w-8 h-8 border-2 border-blue-300/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-20 w-6 h-6 border-2 border-purple-300/40 rounded-full animate-float"></div>
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        <div className="page-transition">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="heading-xl mb-6">
              <span className="text-slate-700 block">Hello, I'm</span>
              <span className="gradient-text block mt-2">
                Sri Ragavendra Bharath
              </span>
            </h1>
          </div>
          
          {/* Subtitle with Professional Focus */}
          <div className="mb-10">
            <h2 className="heading-lg text-slate-600 mb-6">
              Backend Python Developer & API Architect
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="badge-primary">FastAPI Expert</span>
              <span className="badge-secondary">MySQL</span>
              <span className="badge-success">Microservices</span>
              <span className="badge-primary">Docker</span>
            </div>
          </div>
          
          {/* Description - Professional Summary */}
          <div className="mb-12">
            <div className="glass-effect max-w-4xl mx-auto p-8 rounded-2xl">
              <p className="text-body text-lg leading-relaxed">
                Passionate Backend Python Developer specializing in building scalable, high-performance server architectures 
                and RESTful APIs. With expertise in FastAPI, PostgreSQL, and modern cloud technologies, I create robust 
                backend solutions that power enterprise applications and drive business growth.
              </p>
            </div>
          </div>
          
          {/* CTA Buttons - Modern Light Theme */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="#projects"
              className="btn-primary group"
            >
              <span className="relative z-10 flex items-center">
                Explore My Work
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="/Sri_Ragavendra_Bharath_Resume.pdf"
              download="Sri_Ragavendra_Bharath_Resume.pdf"
              className="btn-secondary group"
            >
              <span className="flex items-center">
                Download Resume
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="btn-outline group"
            >
              <span className="flex items-center">
                Let's Connect
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Professional Stats */}
          <div className="card-glass max-w-3xl mx-auto p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-slate-700 mb-1">1+</div>
                <div className="text-sm text-slate-500">Years Experience</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-slate-700 mb-1">6+</div>
                <div className="text-sm text-slate-500">Projects Delivered</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-slate-700 mb-1">10+</div>
                <div className="text-sm text-slate-500">Technologies Mastered</div>
              </div>
            </div>
          </div>

          {/* Social Links - Enhanced Light Theme */}
          <div className="flex justify-center space-x-6 mb-20">
            <a
              href="https://github.com/nanragav"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 card-glass hover:scale-110 transition-all duration-300 hover:shadow-lg"
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6 text-slate-600 group-hover:text-slate-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sriragavendrabharath/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 card-glass hover:scale-110 transition-all duration-300 hover:shadow-lg"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:sriragavendrabharath@outlook.com"
              className="group p-4 card-glass hover:scale-110 transition-all duration-300 hover:shadow-lg"
              aria-label="Email Contact"
            >
              <svg className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="/Sri_Ragavendra_Bharath_Resume.pdf"
              download="Sri_Ragavendra_Bharath_Resume.pdf"
              className="group p-4 card-glass hover:scale-110 transition-all duration-300 hover:shadow-lg"
              aria-label="Download Resume"
            >
              <svg className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}