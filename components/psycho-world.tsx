'use client'

import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import { Scene } from './scene'
import { Overlay } from './overlay'

export function PsychoWorld() {
  return (
    <div className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ScrollControls pages={5} damping={0.25}>
          <Scene />
          <Scroll html>
            <Overlay />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}
