'use client'

export function Overlay() {
  return (
    <div className="w-full">
      {/* Section 1 */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center space-y-6 px-6">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">
              PSYCHO
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-mono tracking-wide">
            {'Enter the twisted dimension'}
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center space-y-4 px-6 max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-bold text-balance">
            <span className="text-[#00ffff]">{'Warp'}</span> Reality
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            {'Scroll through infinite geometric dreams'}
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center space-y-4 px-6 max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-bold text-balance">
            <span className="text-[#00ff88]">{'Hypnotic'}</span> Patterns
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            {'Lose yourself in the mesmerizing void'}
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center space-y-4 px-6 max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-bold text-balance">
            <span className="text-[#ff00ff]">{'Distorted'}</span> Space
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            {'Where geometry becomes art'}
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center space-y-6 px-6">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] via-[#00ffff] to-[#ff00ff]">
              {'WORLD'}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 font-mono tracking-wide">
            {'The journey continues forever'}
          </p>
        </div>
      </div>

      {/* Section 6 - Creator Profile & GitHub Template */}
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center space-y-10 px-6 max-w-5xl">
          {/* Profile Section */}
          <div className="flex flex-col items-center gap-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#00ff88] rounded-full blur-xl opacity-50 animate-pulse" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-q2QtDuBet3iyGRLMDnYn0bl1idVaK7.webp"
                alt="Amirhossein Salmani"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#00ffff]"
              />
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#00ff88]">
                  Amirhossein Salmani
                </span>
              </h2>
              <p className="text-lg md:text-xl text-[#00ffff] font-mono">
                Full Stack Developer • AI Specialist
              </p>
            </div>

            {/* Amir Naturally Image */}
            <div className="w-full max-w-md mx-auto">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/672337885_18594243295059271_6517036533833230114_n-GLjXJxK2vLw0b7UHHtm1f8aap1cJq7.webp"
                alt="Amir, naturally - spelled from satellite imagery"
                className="w-full rounded-2xl border-2 border-[#00ff88]/30"
              />
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/amhousa/psycho-world-3-d"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-full font-bold text-lg hover:scale-105 transition-transform"
              >
                <span className="relative z-10 text-black flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  Use This Template
                </span>
              </a>
              
              <a
                href="https://amhousa.art"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#00ff88] text-[#00ff88] rounded-full font-bold text-lg hover:bg-[#00ff88]/10 transition-colors"
              >
                amhousa.art
              </a>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-6 justify-center pt-4">
              <a
                href="https://github.com/amhousa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-[#00ffff] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                @amhousa
              </a>
              <a
                href="mailto:amirhosseinsalmanidev@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-[#ff00ff] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Contact
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-8 space-y-4">
            <p className="text-sm text-muted-foreground/60 font-mono">
              Built with React Three Fiber • Next.js • Framer Motion
            </p>
            <p className="text-xs text-muted-foreground/40 font-mono">
              {'Fork this template on GitHub to create your own psychedelic world'}
            </p>
          </div>

          {/* Footer */}
          <div className="pt-8 flex items-center justify-center gap-6 text-xs text-muted-foreground/40 font-mono">
            <span>© 2025 Amirhossein Salmani</span>
            <span>•</span>
            <span>MIT License</span>
          </div>
        </div>
      </div>
    </div>
  )
}
