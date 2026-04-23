'use client'

import { Github, Mail, ExternalLink, Code, Brain, Layers, ChevronDown } from 'lucide-react'

export function Overlay() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center relative px-6">
        <div className="flex flex-col items-center gap-8 text-center max-w-4xl">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#00ff88] rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-q2QtDuBet3iyGRLMDnYn0bl1idVaK7.webp"
              alt="Amirhossein Salmani"
              className="relative w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#00ffff]/50 shadow-2xl shadow-[#00ffff]/20"
            />
          </div>

          {/* Name */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#00ff88]">
                Amirhossein
              </span>
              <br />
              <span className="text-foreground">Salmani</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#00ffff] font-mono tracking-wide">
              Full Stack Developer & AI Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="https://github.com/amhousa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-foreground/10 backdrop-blur-sm border border-foreground/20 rounded-full text-foreground hover:bg-[#00ffff]/20 hover:border-[#00ffff]/50 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:amirhosseinsalmanidev@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-foreground/10 backdrop-blur-sm border border-foreground/20 rounded-full text-foreground hover:bg-[#ff00ff]/20 hover:border-[#ff00ff]/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </a>
            <a
              href="https://amhousa.art"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-full text-black font-semibold hover:scale-105 transition-transform duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              <span>amhousa.art</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-muted-foreground font-mono">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-[#00ffff]" />
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-[#00ffff]">About</span> Me
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I craft digital experiences that blend creativity with cutting-edge technology. 
              Passionate about building intelligent systems and beautiful interfaces.
            </p>
          </div>

          {/* Amir Naturally Image */}
          <div className="relative group max-w-lg mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#00ff88] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/672337885_18594243295059271_6517036533833230114_n-GLjXJxK2vLw0b7UHHtm1f8aap1cJq7.webp"
              alt="Amir, naturally - spelled from satellite imagery around the world"
              className="relative w-full rounded-2xl border border-foreground/10"
            />
            <p className="text-center text-sm text-muted-foreground mt-4 font-mono">
              {"Amir, naturally - found in Earth's geography"}
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-[#00ff88]">What I</span> Do
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Full Stack */}
            <div className="group p-8 rounded-3xl bg-foreground/5 backdrop-blur-sm border border-foreground/10 hover:border-[#ff00ff]/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#ff00ff]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-[#ff00ff]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Full Stack Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building end-to-end web applications with modern frameworks. From responsive frontends to scalable backends.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono bg-[#ff00ff]/10 text-[#ff00ff] rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* AI */}
            <div className="group p-8 rounded-3xl bg-foreground/5 backdrop-blur-sm border border-foreground/10 hover:border-[#00ffff]/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#00ffff]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-[#00ffff]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI & Machine Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrating intelligent systems into applications. Creating smart, adaptive user experiences.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['LLMs', 'AI SDK', 'Python', 'RAG'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono bg-[#00ffff]/10 text-[#00ffff] rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Creative */}
            <div className="group p-8 rounded-3xl bg-foreground/5 backdrop-blur-sm border border-foreground/10 hover:border-[#00ff88]/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#00ff88]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-8 h-8 text-[#00ff88]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Creative Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Crafting immersive digital experiences with 3D graphics, animations, and interactive art.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Three.js', 'WebGL', 'Framer', 'GSAP'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono bg-[#00ff88]/10 text-[#00ff88] rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Project Section */}
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-[#ff00ff]">Featured</span> Project
            </h2>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#00ff88] rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative p-8 md:p-12 rounded-3xl bg-foreground/5 backdrop-blur-sm border border-foreground/10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                  <div className="inline-block px-4 py-2 bg-[#00ffff]/10 rounded-full">
                    <span className="text-sm font-mono text-[#00ffff]">Open Source Template</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Psycho World 3D</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    An immersive psychedelic 3D experience with scroll-driven animations. 
                    Built with React Three Fiber, Next.js, and Framer Motion. 
                    Fork it and create your own trippy world.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['React Three Fiber', 'Next.js', 'Framer Motion', 'TypeScript'].map((tech) => (
                      <span key={tech} className="px-4 py-2 text-sm font-mono bg-foreground/10 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a
                      href="https://github.com/amhousa/psycho-world-3-d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-full text-black font-semibold hover:scale-105 transition-transform duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>Use Template</span>
                    </a>
                    <a
                      href="https://github.com/amhousa/psycho-world-3-d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-foreground/20 rounded-full hover:bg-foreground/10 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
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
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl w-full text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              {"Let's"} <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#00ff88]">Connect</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:amirhosseinsalmanidev@gmail.com"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-2xl text-black font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              <Mail className="w-6 h-6" />
              <span>Send Email</span>
            </a>
            <a
              href="https://github.com/amhousa"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#00ff88] text-[#00ff88] rounded-2xl font-bold text-lg hover:bg-[#00ff88]/10 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
              <span>Follow on GitHub</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground font-mono mb-4">Find me online</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/amhousa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-[#00ffff]/20 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:amirhosseinsalmanidev@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-[#ff00ff]/20 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://amhousa.art"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-[#00ff88]/20 hover:scale-110 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
            <span>© 2025 Amirhossein Salmani</span>
            <span className="flex items-center gap-2">
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
