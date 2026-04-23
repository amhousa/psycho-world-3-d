# Psycho World 3D by Amirhossein Salmani

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://amhousa.art)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app)
[![GitHub](https://img.shields.io/badge/GitHub-amhousa-black?style=for-the-badge&logo=github)](https://github.com/amhousa/psycho-world-3-d)

An immersive psychedelic 3D experience featuring scroll-driven animations, vibrant neon visuals, and mind-bending geometric shapes.

## Overview

Psycho World 3D is an interactive web experience that takes users on a journey through a surreal 3D landscape. Built with cutting-edge web technologies, it features smooth scroll-based animations that transform and zoom through psychedelic scenes.

## Features

- **Scroll-Driven Animations**: Smooth camera movements and object transformations based on scroll position
- **3D Geometric Shapes**: Animated toruses, spheres, and boxes with vibrant materials
- **Neon Aesthetic**: Eye-catching pink, cyan, and green color palette
- **Performance Optimized**: Built with React Three Fiber for efficient 3D rendering
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Smooth animations and scroll effects
- **TypeScript** - Type-safe code
- **Tailwind CSS v4** - Styling and design tokens

## Live Demo

Visit the live experience at: **[amhousa.art](https://amhousa.art)**

## GitHub Repository

Explore the code: **[github.com/amhousa/psycho-world-3-d](https://github.com/amhousa/psycho-world-3-d)**

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/amhousa/psycho-world-3-d.git

# Navigate to project directory
cd psycho-world-3-d

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Usage as Template

This project can be used as a template for creating your own psychedelic 3D experiences:

1. Fork this repository
2. Customize the colors in `app/globals.css`
3. Modify 3D objects in `components/scene.tsx`
4. Update content in `components/overlay.tsx`
5. Deploy to Vercel with one click

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx          # Main entry point
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles and design tokens
├── components/
│   ├── psycho-world.tsx  # Main 3D world wrapper
│   ├── scene.tsx         # 3D objects and animations
│   └── overlay.tsx       # Text overlay content
└── package.json          # Dependencies
\`\`\`

## Customization

### Colors
Edit the design tokens in `app/globals.css`:
\`\`\`css
--psycho-pink: oklch(0.7 0.35 330);
--psycho-cyan: oklch(0.8 0.25 195);
--psycho-green: oklch(0.75 0.3 150);
\`\`\`

### 3D Objects
Modify shapes in `components/scene.tsx` to add or change geometric elements.

### Content
Update text and sections in `components/overlay.tsx` to customize the narrative.

## Performance

- Optimized 3D rendering with React Three Fiber
- Efficient scroll animations with Framer Motion
- Lazy loading and code splitting with Next.js
- Production-ready build with minimal bundle size

## License

MIT License - feel free to use this template for your own projects!

## Author

**Amirhossein Salmani**
- Website: [amhousa.art](https://amhousa.art)
- GitHub: [@amhousa](https://github.com/amhousa)
- Email: amirhosseinsalmanidev@gmail.com
- Role: Full Stack Web Developer | AI Specialist

## Acknowledgments

Built with [v0.app](https://v0.app) - AI-powered web development tool

---

*Fork this template and create your own psychedelic digital experience!*
