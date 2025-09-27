export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg gradient-text mb-6">
            Let's Connect
          </h2>
          <div className="section-divider w-24 mx-auto mb-6"></div>
          <p className="text-body text-lg max-w-3xl mx-auto">
            Ready to collaborate on your next backend project? I'm always excited to discuss 
            new opportunities and explore innovative solutions!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="card-glass p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">Email</p>
                    <a href="mailto:sriragavendrabharath@outlook.com" className="text-slate-800 text-lg hover:text-blue-600 transition-colors">
                      sriragavendrabharath@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">Phone</p>
                    <a href="tel:+918428424434" className="text-slate-800 text-lg hover:text-emerald-600 transition-colors">
                      +91 8428424434
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">Location</p>
                    <p className="text-slate-800 text-lg">Tirupur, Tamil Nadu, 641603</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Call to Action */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Follow My Journey</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/nanragav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl hover:from-gray-700 hover:to-gray-600 transition-all duration-300 group"
                >
                  <svg className="w-10 h-10 text-white mb-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-white font-medium">GitHub</span>
                  <span className="text-gray-400 text-sm">View Projects</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/sriragavendrabharath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-blue-100 hover:bg-blue-200 rounded-2xl transition-all duration-300 group"
                >
                  <svg className="w-10 h-10 text-blue-600 mb-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-blue-700 font-medium">LinkedIn</span>
                  <span className="text-blue-600 text-sm">Connect</span>
                </a>
              </div>

              <div className="text-center">
                <a
                  href="https://nanragav.github.io/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c0 4.97-4.03 9-9 9s-9-4.03-9-9m9 9c0-4.97 4.03-9 9-9s9 4.03 9 9" />
                  </svg>
                  Visit Portfolio
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">My Expertise</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Currently pursuing Master's in Computer Science while working as a Python Backend Developer. 
                I specialize in building secure, scalable backend systems and API integrations.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="badge-primary">
                  Backend Development
                </span>
                <span className="badge-secondary">
                  API Design
                </span>
                <span className="badge-success">
                  Security Testing
                </span>
                <span className="badge-primary">
                  Database Optimization
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-slate-200">
          <p className="text-slate-600 text-lg mb-4">
            © 2025 Sri Ragavendra Bharath S
          </p>
          <div className="flex justify-center items-center space-x-4 text-slate-500">
            <span className="text-sm">Made with ❤️ in India</span>
            <span className="text-sm">•</span>
            <span className="text-sm">Built with Next.js & Tailwind CSS</span>
            <span className="text-sm">•</span>
            <span className="text-sm">Hosted on GitHub Pages</span>
          </div>
        </div>
      </div>
    </section>
  )
}