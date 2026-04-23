'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, Environment, Float, Text3D, Center } from '@react-three/drei'
import * as THREE from 'three'

// Brand color - Teal/Cyan
const BRAND_COLOR = '#00CED1'
const BRAND_COLOR_LIGHT = '#40E0D0'
const BRAND_COLOR_DARK = '#008B8B'

// Code Brackets - representing development
function CodeBracket({ position, scrollOffset, rotation = [0, 0, 0] }: { position: [number, number, number], scrollOffset: number, rotation?: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)
  const scroll = useScroll()

  useFrame((state) => {
    if (!groupRef.current) return
    
    const offset = scroll.offset
    const scaledOffset = (offset - scrollOffset) * 5
    
    // Gentle rotation
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.2 + rotation[1]
    
    // Scale based on scroll proximity
    const distance = Math.abs(offset - scrollOffset)
    const scale = Math.max(0.3, 1 - distance * 1.5)
    groupRef.current.scale.setScalar(scale)
    
    // Move with scroll
    groupRef.current.position.z = position[2] - scaledOffset * 8
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* Left bracket < */}
      <mesh position={[-0.5, 0, 0]}>
        <boxGeometry args={[0.1, 2, 0.1]} />
        <meshStandardMaterial color={BRAND_COLOR} emissive={BRAND_COLOR} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.8, 0.7, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial color={BRAND_COLOR} emissive={BRAND_COLOR} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.8, -0.7, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial color={BRAND_COLOR} emissive={BRAND_COLOR} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Right bracket > */}
      <mesh position={[0.5, 0, 0]}>
        <boxGeometry args={[0.1, 2, 0.1]} />
        <meshStandardMaterial color={BRAND_COLOR_LIGHT} emissive={BRAND_COLOR_LIGHT} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.8, 0.7, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial color={BRAND_COLOR_LIGHT} emissive={BRAND_COLOR_LIGHT} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.8, -0.7, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial color={BRAND_COLOR_LIGHT} emissive={BRAND_COLOR_LIGHT} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Neural Network Node - representing AI
function NetworkNode({ position, scrollOffset }: { position: [number, number, number], scrollOffset: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const scroll = useScroll()

  useFrame((state) => {
    if (!groupRef.current) return
    
    const offset = scroll.offset
    const scaledOffset = (offset - scrollOffset) * 5
    
    // Gentle pulse
    const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1
    
    // Scale based on scroll proximity
    const distance = Math.abs(offset - scrollOffset)
    const scale = Math.max(0.2, 1 - distance * 1.5) * pulse
    groupRef.current.scale.setScalar(scale)
    
    // Rotate slowly
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    groupRef.current.rotation.x = state.clock.elapsedTime * 0.1
    
    // Move with scroll
    groupRef.current.position.z = position[2] - scaledOffset * 8
  })

  // Create connections between nodes
  const connections = useMemo(() => {
    const lines = []
    const nodePositions = [
      [0, 0, 0],
      [1.5, 1, 0.5],
      [-1.5, 1, -0.5],
      [1, -1.2, 0.3],
      [-1, -1.2, -0.3],
      [0, 1.5, -0.5],
    ]
    
    // Connect center to all others
    for (let i = 1; i < nodePositions.length; i++) {
      lines.push({ start: nodePositions[0], end: nodePositions[i] })
    }
    
    return lines
  }, [])

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <group ref={groupRef} position={position}>
        {/* Central node */}
        <mesh>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color={BRAND_COLOR} emissive={BRAND_COLOR} emissiveIntensity={0.8} metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Outer nodes */}
        {[[1.5, 1, 0.5], [-1.5, 1, -0.5], [1, -1.2, 0.3], [-1, -1.2, -0.3], [0, 1.5, -0.5]].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color={BRAND_COLOR_LIGHT} emissive={BRAND_COLOR_LIGHT} emissiveIntensity={0.6} metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
        
        {/* Connection lines */}
        {connections.map((conn, i) => {
          const start = new THREE.Vector3(...conn.start as [number, number, number])
          const end = new THREE.Vector3(...conn.end as [number, number, number])
          const mid = start.clone().add(end).multiplyScalar(0.5)
          const length = start.distanceTo(end)
          const direction = end.clone().sub(start).normalize()
          
          return (
            <mesh key={i} position={mid} rotation={[0, 0, Math.atan2(direction.y, direction.x)]}>
              <cylinderGeometry args={[0.02, 0.02, length, 8]} />
              <meshStandardMaterial color={BRAND_COLOR_DARK} emissive={BRAND_COLOR_DARK} emissiveIntensity={0.3} transparent opacity={0.6} />
            </mesh>
          )
        })}
      </group>
    </Float>
  )
}

// Flowing Data Stream - representing data/code flow
function DataStream({ position, scrollOffset }: { position: [number, number, number], scrollOffset: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const scroll = useScroll()
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      x: (Math.random() - 0.5) * 0.5,
      y: (i / 20) * 4 - 2,
      z: (Math.random() - 0.5) * 0.5,
      speed: 0.5 + Math.random() * 0.5,
      size: 0.05 + Math.random() * 0.05,
    }))
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    
    const offset = scroll.offset
    const scaledOffset = (offset - scrollOffset) * 5
    
    // Scale based on scroll proximity
    const distance = Math.abs(offset - scrollOffset)
    const scale = Math.max(0.2, 1 - distance * 1.5)
    groupRef.current.scale.setScalar(scale)
    
    // Rotate
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    
    // Move with scroll
    groupRef.current.position.z = position[2] - scaledOffset * 8
    
    // Animate particles
    groupRef.current.children.forEach((child, i) => {
      if (child instanceof THREE.Mesh) {
        const particle = particles[i]
        if (particle) {
          child.position.y = ((state.clock.elapsedTime * particle.speed + particle.y) % 4) - 2
        }
      }
    })
  })

  return (
    <group ref={groupRef} position={position}>
      {particles.map((particle, i) => (
        <mesh key={i} position={[particle.x, particle.y, particle.z]}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? BRAND_COLOR : BRAND_COLOR_LIGHT} 
            emissive={i % 2 === 0 ? BRAND_COLOR : BRAND_COLOR_LIGHT} 
            emissiveIntensity={0.7} 
            transparent 
            opacity={0.8} 
          />
        </mesh>
      ))}
      {/* Central tube */}
      <mesh>
        <cylinderGeometry args={[0.3, 0.3, 4, 16, 1, true]} />
        <meshStandardMaterial color={BRAND_COLOR_DARK} emissive={BRAND_COLOR_DARK} emissiveIntensity={0.2} transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

// Orbiting Ring - representing connectivity and fullstack
function OrbitRing({ position, scrollOffset, axis = 'y' }: { position: [number, number, number], scrollOffset: number, axis?: 'x' | 'y' | 'z' }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const scroll = useScroll()

  useFrame((state) => {
    if (!meshRef.current) return
    
    const offset = scroll.offset
    const scaledOffset = (offset - scrollOffset) * 5
    
    // Rotate based on axis
    if (axis === 'x') {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
    } else if (axis === 'y') {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    } else {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5
    }
    
    // Scale based on scroll proximity
    const distance = Math.abs(offset - scrollOffset)
    const scale = Math.max(0.3, 1 - distance * 1.5)
    meshRef.current.scale.setScalar(scale)
    
    // Move with scroll
    meshRef.current.position.z = position[2] - scaledOffset * 8
  })

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1.2, 0.05, 16, 100]} />
      <meshStandardMaterial color={BRAND_COLOR} emissive={BRAND_COLOR} emissiveIntensity={0.6} metalness={0.9} roughness={0.1} />
    </mesh>
  )
}

// Hexagon - representing structure and systems
function HexagonShape({ position, scrollOffset }: { position: [number, number, number], scrollOffset: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const scroll = useScroll()

  useFrame((state) => {
    if (!meshRef.current) return
    
    const offset = scroll.offset
    const scaledOffset = (offset - scrollOffset) * 5
    
    // Rotate slowly
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.1
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    
    // Scale based on scroll proximity
    const distance = Math.abs(offset - scrollOffset)
    const scale = Math.max(0.3, 1 - distance * 1.5)
    meshRef.current.scale.setScalar(scale)
    
    // Move with scroll
    meshRef.current.position.z = position[2] - scaledOffset * 8
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <cylinderGeometry args={[1, 1, 0.2, 6]} />
        <meshStandardMaterial color={BRAND_COLOR} emissive={BRAND_COLOR} emissiveIntensity={0.4} metalness={0.7} roughness={0.3} wireframe />
      </mesh>
    </Float>
  )
}

export function Scene() {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color={BRAND_COLOR} />
      <pointLight position={[-10, -10, -10]} intensity={1} color={BRAND_COLOR_LIGHT} />
      <pointLight position={[0, 0, 20]} intensity={0.8} color={BRAND_COLOR_DARK} />
      
      {/* Hero Section - Code Brackets */}
      <CodeBracket position={[0, 0, 0]} scrollOffset={0} />
      <OrbitRing position={[0, 0, 0]} scrollOffset={0} axis="x" />
      <OrbitRing position={[0, 0, 0]} scrollOffset={0} axis="z" />
      
      {/* About Section - Network representing AI knowledge */}
      <NetworkNode position={[0, 0, -8]} scrollOffset={0.15} />
      <DataStream position={[2.5, 0, -10]} scrollOffset={0.15} />
      <DataStream position={[-2.5, 0, -10]} scrollOffset={0.15} />
      
      {/* Skills Section - Multiple elements */}
      <CodeBracket position={[-2, 1, -16]} scrollOffset={0.35} rotation={[0, 0.5, 0]} />
      <NetworkNode position={[2, 0, -18]} scrollOffset={0.35} />
      <HexagonShape position={[0, -1, -17]} scrollOffset={0.35} />
      
      {/* Featured Project Section */}
      <HexagonShape position={[-2, 1, -24]} scrollOffset={0.55} />
      <HexagonShape position={[2, -1, -25]} scrollOffset={0.55} />
      <DataStream position={[0, 0, -26]} scrollOffset={0.55} />
      
      {/* Connect Section - Network of connections */}
      <NetworkNode position={[0, 0, -32]} scrollOffset={0.75} />
      <OrbitRing position={[0, 0, -32]} scrollOffset={0.75} axis="y" />
      <OrbitRing position={[0, 0, -32]} scrollOffset={0.75} axis="x" />
      
      {/* Footer Section */}
      <CodeBracket position={[0, 0, -38]} scrollOffset={0.9} />
      <HexagonShape position={[-2, 0, -40]} scrollOffset={0.9} />
      <HexagonShape position={[2, 0, -40]} scrollOffset={0.9} />
    </>
  )
}
