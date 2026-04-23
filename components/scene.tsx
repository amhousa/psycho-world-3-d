"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "@react-three/drei"
import * as THREE from "three"

const BRAND_COLOR = "#C4E9C0"

function DesertTerrain() {
  const terrainRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.ShaderMaterial>(null!)

  const terrainShader = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 }
    },
    vertexShader: `
      uniform float uTime;
      varying vec3 vPosition;
      varying float vElevation;
      
      void main() {
        vec3 pos = position;
        float wave = sin(pos.x * 0.3 + uTime * 0.5) * cos(pos.y * 0.3 + uTime * 0.3) * 1.5;
        pos.z = wave;
        
        vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
        vPosition = pos;
        vElevation = pos.z;
        gl_Position = projectionMatrix * viewMatrix * modelPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vPosition;
      varying float vElevation;
      
      void main() {
        float alpha = 0.35;
        vec3 color = vec3(0.77, 0.91, 0.75);
        float elevationColor = (vElevation + 2.0) * 0.12;
        color += elevationColor * 0.25;
        gl_FragColor = vec4(color, alpha);
      }
    `,
  }), [])

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={terrainRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -10, -20]}>
      <planeGeometry args={[120, 120, 60, 60]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={terrainShader.vertexShader}
        fragmentShader={terrainShader.fragmentShader}
        uniforms={terrainShader.uniforms}
        transparent={true}
        wireframe={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null!)
  const particleCount = 1500

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.015
      particlesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.08) * 0.08
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={BRAND_COLOR}
        transparent
        opacity={0.9}
        sizeAttenuation={true}
      />
    </points>
  )
}

function FloatingRings() {
  const group = useRef<THREE.Group>(null!)
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.z = clock.getElapsedTime() * 0.08
      group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.15) * 0.15
    }
  })

  return (
    <group ref={group} position={[0, 0, -25]}>
      {[...Array(6)].map((_, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, (i * Math.PI) / 6]}>
          <torusGeometry args={[10 + i * 2.5, 0.015, 16, 120]} />
          <meshBasicMaterial color={BRAND_COLOR} transparent opacity={0.25 - i * 0.03} />
        </mesh>
      ))}
    </group>
  )
}

function ScrollCamera() {
  const scroll = useScroll()
  
  useFrame(({ camera }) => {
    const offset = scroll.offset
    camera.position.z = 12 - offset * 18
    camera.position.y = offset * 6
    camera.rotation.x = -offset * 0.15
  })

  return null
}

export function Scene() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[10, 10, 10]} intensity={0.4} color={BRAND_COLOR} />
      <pointLight position={[-10, -10, -10]} intensity={0.25} color={BRAND_COLOR} />
      
      <DesertTerrain />
      <Particles />
      <FloatingRings />
      <ScrollCamera />
      
      <fog attach="fog" args={['#0a0a0a', 15, 100]} />
    </>
  )
}
