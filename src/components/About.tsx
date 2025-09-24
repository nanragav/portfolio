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
                  src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/icons/profile.svg`}
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
                Hey there! I'm a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> who 
                loves turning complex problems into elegant solutions. Currently building awesome things at 
                <span className="text-purple-400 font-semibold"> Dynavac India</span>, where I work on systems 
                that actually make a difference.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                My journey in tech started with a curiosity for how things work behind the scenes. 
                I discovered Python and fell in love with its simplicity and power. From there, 
                I dove deep into backend development, exploring frameworks like <span className="text-blue-400">FastAPI</span> 
                and building scalable systems that can handle real-world challenges.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                But I don't just stick to the backend! I also enjoy crafting beautiful mobile experiences with 
                <span className="text-purple-400"> Flutter</span>, working with cloud platforms like 
                <span className="text-blue-400"> Azure</span>, and exploring the latest in web technologies. 
                There's something magical about seeing your code come to life and knowing it's helping people solve real problems.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 hover:bg-blue-500/20 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Problem Solver</h3>
                    <p className="text-gray-400 text-sm">Love tackling complex challenges</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 hover:bg-purple-500/20 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Fast Learner</h3>
                    <p className="text-gray-400 text-sm">Always exploring new tech</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Innovation Driven</h3>
                    <p className="text-gray-400 text-sm">Building tomorrow's solutions</p>
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