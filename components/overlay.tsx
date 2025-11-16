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

      {/* Section 6 - Added final section with GitHub template info */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/50">
        <div className="text-center space-y-8 px-6 max-w-4xl">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#00ff88]">
                amhousa.art
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-mono">
              {'Explore more psychedelic digital experiences'}
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 pt-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/amhousa/psycho-world-3-d"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-full font-bold text-lg hover:scale-105 transition-transform"
              >
                <span className="relative z-10 text-black">View on GitHub</span>
              </a>
              
              <a
                href="https://amhousa.art"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#00ff88] text-[#00ff88] rounded-full font-bold text-lg hover:bg-[#00ff88]/10 transition-colors"
              >
                Visit amhousa.art
              </a>
            </div>

            <div className="pt-8 space-y-2">
              <p className="text-sm text-muted-foreground/60 font-mono">
                Built with React Three Fiber • Next.js • Framer Motion
              </p>
              <p className="text-xs text-muted-foreground/40 font-mono">
                {'Fork this template on GitHub to create your own psychedelic world'}
              </p>
            </div>
          </div>

          <div className="pt-12 flex items-center justify-center gap-6 text-xs text-muted-foreground/40 font-mono">
            <span>© 2025 amhousa</span>
            <span>•</span>
            <span>MIT License</span>
          </div>
        </div>
      </div>
    </div>
  )
}
