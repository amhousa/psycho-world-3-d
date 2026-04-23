'use client'

import { Github, Mail, ExternalLink, Code, Brain, Layers, ChevronDown } from 'lucide-react'

export function Overlay() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center relative px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-6 md:gap-8 text-center w-full max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#00ff88] rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-q2QtDuBet3iyGRLMDnYn0bl1idVaK7.webp"
              alt="Amir Hossein Salmani"
              className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-[#00ffff]/50 shadow-2xl shadow-[#00ffff]/20"
            />
          </div>

          {/* Name */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-white">Amir Hossein</span>
              <br />
              <span className="text-white/90">Salmani</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-mono tracking-wide">
              Full Stack Developer & AI Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center pt-2 md:pt-4 w-full">
            <a
              href="https://github.com/amhousa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 md:py-3 bg-foreground/10 backdrop-blur-sm border border-foreground/20 rounded-full text-foreground text-sm md:text-base hover:bg-[#00ffff]/20 hover:border-[#00ffff]/50 transition-all duration-300"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:amirhosseinsalmanidev@gmail.com"
              className="flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 md:py-3 bg-foreground/10 backdrop-blur-sm border border-foreground/20 rounded-full text-foreground text-sm md:text-base hover:bg-[#ff00ff]/20 hover:border-[#ff00ff]/50 transition-all duration-300"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              <span>Contact</span>
            </a>
            <a
              href="https://amhousa.art"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-full text-black font-semibold text-sm md:text-base hover:scale-105 transition-transform duration-300"
            >
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              <span>amhousa.art</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs md:text-sm text-muted-foreground font-mono">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#00ffff]" />
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="w-full max-w-4xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              About <span className="text-white/80">Me</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              I craft digital experiences that blend creativity with cutting-edge technology. 
              Passionate about building intelligent systems and beautiful interfaces.
            </p>
          </div>

          {/* Amir Naturally Image */}
          <div className="relative group w-full max-w-md mx-auto px-4">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#00ff88] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/672337885_18594243295059271_6517036533833230114_n-GLjXJxK2vLw0b7UHHtm1f8aap1cJq7.webp"
              alt="Amir, naturally - spelled from satellite imagery around the world"
              className="relative w-full rounded-2xl border border-foreground/10"
            />
            <p className="text-center text-xs md:text-sm text-muted-foreground mt-3 md:mt-4 font-mono">
              {"Amir, naturally - found in Earth's geography"}
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="w-full max-w-5xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              What I <span className="text-white/80">Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Full Stack */}
            <div className="group p-6 md:p-8 rounded-2xl md:rounded-3xl bg-foreground/5 backdrop-blur-sm border border-foreground/10 hover:border-[#ff00ff]/50 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-[#ff00ff]/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#ff00ff]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Full Stack Development</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Building end-to-end web applications with modern frameworks. From responsive frontends to scalable backends.
              </p>
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech) => (
                  <span key={tech} className="px-2.5 md:px-3 py-1 text-xs font-mono bg-[#ff00ff]/10 text-[#ff00ff] rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* AI */}
            <div className="group p-6 md:p-8 rounded-2xl md:rounded-3xl bg-foreground/5 backdrop-blur-sm border border-foreground/10 hover:border-[#00ffff]/50 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-[#00ffff]/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#00ffff]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">AI & Machine Learning</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Integrating intelligent systems into applications. Creating smart, adaptive user experiences.
              </p>
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
                {['LLMs', 'AI SDK', 'Python', 'RAG'].map((tech) => (
                  <span key={tech} className="px-2.5 md:px-3 py-1 text-xs font-mono bg-[#00ffff]/10 text-[#00ffff] rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Creative */}
            <div className="group p-6 md:p-8 rounded-2xl md:rounded-3xl bg-foreground/5 backdrop-blur-sm border border-foreground/10 hover:border-[#00ff88]/50 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-[#00ff88]/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#00ff88]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Creative Development</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Crafting immersive digital experiences with 3D graphics, animations, and interactive art.
              </p>
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
                {['Three.js', 'WebGL', 'Framer', 'GSAP'].map((tech) => (
                  <span key={tech} className="px-2.5 md:px-3 py-1 text-xs font-mono bg-[#00ff88]/10 text-[#00ff88] rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Project Section */}
      <div className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="w-full max-w-4xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Featured <span className="text-white/80">Project</span>
            </h2>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#00ff88] rounded-2xl md:rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative p-5 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl bg-foreground/5 backdrop-blur-sm border border-foreground/10">
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="space-y-4 md:space-y-6">
                  <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-[#00ffff]/10 rounded-full">
                    <span className="text-xs md:text-sm font-mono text-[#00ffff]">Open Source Template</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Psycho World 3D</h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    An immersive psychedelic 3D experience with scroll-driven animations. 
                    Built with React Three Fiber, Next.js, and Framer Motion. 
                    Fork it and create your own trippy world.
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {['React Three Fiber', 'Next.js', 'Framer Motion', 'TypeScript'].map((tech) => (
                      <span key={tech} className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-mono bg-foreground/10 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                    <a
                      href="https://github.com/amhousa/psycho-world-3-d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-full text-black font-semibold text-sm md:text-base hover:scale-105 transition-transform duration-300"
                    >
                      <Github className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Use Template</span>
                    </a>
                    <a
                      href="https://github.com/amhousa/psycho-world-3-d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 border border-foreground/20 rounded-full text-sm md:text-base hover:bg-foreground/10 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="w-full max-w-3xl mx-auto text-center space-y-8 md:space-y-12">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {"Let's"} <span className="text-white/80">Connect</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto px-2">
              {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
            <a
              href="mailto:amirhosseinsalmanidev@gmail.com"
              className="group flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-xl md:rounded-2xl text-black font-bold text-base md:text-lg hover:scale-105 transition-transform duration-300"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
              <span>Send Email</span>
            </a>
            <a
              href="https://github.com/amhousa"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 border-2 border-[#00ff88] text-[#00ff88] rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-[#00ff88]/10 transition-colors duration-300"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
              <span>Follow on GitHub</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-6 md:pt-8">
            <p className="text-xs md:text-sm text-muted-foreground font-mono mb-3 md:mb-4">Find me online</p>
            <div className="flex justify-center gap-4 md:gap-6">
              <a
                href="https://github.com/amhousa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-[#00ffff]/20 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="mailto:amirhosseinsalmanidev@gmail.com"
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-[#ff00ff]/20 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://amhousa.art"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-[#00ff88]/20 hover:scale-110 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between text-xs md:text-sm text-muted-foreground font-mono">
            <span>© 2025 Amir Hossein Salmani</span>
            <span className="flex items-center gap-1.5 md:gap-2">
              Crafted with
              <span className="text-[#ff00ff]">passion</span>
              in the
              <span className="text-[#00ffff]">digital realm</span>
            </span>
            <a
              href="https://github.com/amhousa/psycho-world-3-d"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ff88] transition-colors"
            >
              MIT License
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
