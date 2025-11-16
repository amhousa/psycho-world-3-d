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
    </div>
  )
}
