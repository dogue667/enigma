"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface MysterySymbol {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  symbol: string
}

const symbols = ["◇", "△", "○", "☆", "◈", "⬡", "⬢", "✧", "⟁", "⌘"]

function generateSymbols(count: number): MysterySymbol[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 16 + 12,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 6,
    symbol: symbols[Math.floor(Math.random() * symbols.length)],
  }))
}

export function FloatingSymbols() {
  const [mysterySymbols, setMysterySymbols] = useState<MysterySymbol[]>([])

  useEffect(() => {
    setMysterySymbols(generateSymbols(15))
  }, [])

  if (mysterySymbols.length === 0) return null

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {mysterySymbols.map((s) => (
        <motion.div
          key={s.id}
          className="absolute text-gold/20"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            fontSize: s.size,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {s.symbol}
        </motion.div>
      ))}
    </div>
  )
}
