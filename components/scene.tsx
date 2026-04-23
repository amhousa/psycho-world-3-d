'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, Environment, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function RotatingTorus({ position, color, scrollOffset }: { position: [number, number, number], color: string, scrollOffset: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const scroll = useScroll()

  useFrame((state) => {
    if (!meshRef.current) return
    
    const offset = scroll.offset
    const scaledOffset = (offset - scrollOffset) * 5
    
    // Rotate based on time and scroll
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.5 + scaledOffset
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + scaledOffset * 0.7
    
    // Zoom effect: scale based on scroll proximity
    const distance = Math.abs(offset - scrollOffset)
    const scale = Math.max(0.5, 1 - distance * 2)
    meshRef.current.scale.setScalar(scale)
    
    // Move objects based on scroll
    meshRef.current.position.z = position[2] - scaledOffset * 10
  })

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1, 0.4, 32, 100]} />
      <MeshDistortMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

function PulsingSphere({ position, color, scrollOffset }: { position: [number, number, number], color: string, scrollOffset: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const scroll = useScroll()

  useFrame((state) => {
    if (!meshRef.current) return
    
    const offset = scroll.offset
    const scaledOffset = (offset - scrollOffset) * 5
    
    // Pulse effect
    const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.2 + 1
    meshRef.current.scale.setScalar(pulse * Math.max(0.3, 1 - Math.abs(offset - scrollOffset) * 2))
    
    // Rotate slowly
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.005
    
    // Move with scroll
    meshRef.current.position.z = position[2] - scaledOffset * 10
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.7}
          distort={0.6}
          speed={3}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  )
}

function RotatingBox({ position, color, scrollOffset }: { position: [number, number, number], color: string, scrollOffset: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const scroll = useScroll()

  useFrame((state) => {
    if (!meshRef.current) return
    
    const offset = scroll.offset
    const scaledOffset = (offset - scrollOffset) * 5
    
    // Rotate on multiple axes
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.7 + scaledOffset
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 + scaledOffset * 0.5
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.3
    
    // Scale based on scroll proximity
    const distance = Math.abs(offset - scrollOffset)
    const scale = Math.max(0.4, 1.2 - distance * 3)
    meshRef.current.scale.setScalar(scale)
    
    // Move with scroll
    meshRef.current.position.z = position[2] - scaledOffset * 10
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.7}
        wireframe={false}
      />
    </mesh>
  )
}

export function Scene() {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff00ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#00ffff" />
      <pointLight position={[0, 0, 20]} intensity={0.5} color="#00ff88" />
      
      {/* First section - Page 0 */}
      <RotatingTorus position={[0, 0, 0]} color="#ff00ff" scrollOffset={0} />
      <PulsingSphere position={[-3, 2, -2]} color="#00ffff" scrollOffset={0} />
      <RotatingBox position={[3, -2, -3]} color="#00ff88" scrollOffset={0} />
      
      {/* Second section - Page 0.25 */}
      <RotatingTorus position={[-2, 1, -5]} color="#00ffff" scrollOffset={0.25} />
      <PulsingSphere position={[2, -1, -7]} color="#ff00ff" scrollOffset={0.25} />
      <RotatingBox position={[0, 2, -6]} color="#ffff00" scrollOffset={0.25} />
      
      {/* Third section - Page 0.5 */}
      <RotatingTorus position={[1, -2, -10]} color="#00ff88" scrollOffset={0.5} />
      <PulsingSphere position={[-2, 0, -12]} color="#ff00ff" scrollOffset={0.5} />
      <RotatingBox position={[2, 1, -11]} color="#00ffff" scrollOffset={0.5} />
      
      {/* Fourth section - Page 0.75 */}
      <RotatingTorus position={[0, 2, -15]} color="#ff00ff" scrollOffset={0.75} />
      <PulsingSphere position={[3, -1, -17]} color="#00ff88" scrollOffset={0.75} />
      <RotatingBox position={[-3, 0, -16]} color="#00ffff" scrollOffset={0.75} />
      
      {/* Fifth section - Page 0.8 */}
      <RotatingTorus position={[-1, 0, -20]} color="#00ffff" scrollOffset={0.8} />
      <PulsingSphere position={[2, 2, -22]} color="#ff00ff" scrollOffset={0.8} />
      <RotatingBox position={[0, -2, -21]} color="#00ff88" scrollOffset={0.8} />
      
      {/* Sixth section - Page 1.0 */}
      <RotatingTorus position={[0, 0, -25]} color="#ff00ff" scrollOffset={1} />
      <PulsingSphere position={[-3, 1, -27]} color="#00ffff" scrollOffset={1} />
      <RotatingBox position={[3, -1, -26]} color="#00ff88" scrollOffset={1} />
    </>
  )
}
