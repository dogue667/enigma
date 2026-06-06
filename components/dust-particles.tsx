"use client"

import { useEffect, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface DustParticle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  xDrift1: number
  xDrift2: number
}

function generateParticles(count: number): DustParticle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 10 + 8,
    xDrift1: Math.random() * 40 - 20,
    xDrift2: Math.random() * 60 - 30,
  }))
}

export function DustParticles() {
  const [particles, setParticles] = useState<DustParticle[]>([])

  useEffect(() => {
    setParticles(generateParticles(40))
  }, [])

  if (particles.length === 0) return null

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-parchment/30"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -100, -200],
              x: [0, p.xDrift1, p.xDrift2],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
