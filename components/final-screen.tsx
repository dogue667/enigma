"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FinalScreenProps {
  isVisible: boolean
}

const finalMessages = [
  { text: "Os códigos foram quebrados.", delay: 0 },
  { text: "Os sinais foram seguidos.", delay: 2000 },
  { text: "O mistério foi resolvido.", delay: 4000 },
  { text: "Agora resta apenas uma última etapa.", delay: 7000 },
  { text: "Agora só falta você pegar o seu presente.", delay: 10000, isSpecial: true },
]

export function FinalScreen({ isVisible }: FinalScreenProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1)
  const [showFinalReveal, setShowFinalReveal] = useState(false)

  useEffect(() => {
    if (!isVisible) {
      setCurrentMessageIndex(-1)
      setShowFinalReveal(false)
      return
    }

    finalMessages.forEach((msg, index) => {
      setTimeout(() => {
        setCurrentMessageIndex(index)
        if (msg.isSpecial) {
          setTimeout(() => setShowFinalReveal(true), 500)
        }
      }, msg.delay)
    })
  }, [isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Vignette effect */}
      <div className="absolute inset-0 vignette" />
      
      {/* Floating symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold/10 text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 3,
              repeat: Infinity,
            }}
          >
            {["◇", "△", "○", "☆", "◈", "⬡"][Math.floor(Math.random() * 6)]}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <AnimatePresence mode="wait">
          {finalMessages.slice(0, currentMessageIndex + 1).map((msg, index) => (
            <motion.div
              key={index}
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: index === currentMessageIndex ? 1 : 0.4, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {msg.isSpecial ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h2
                    className="text-3xl md:text-5xl lg:text-6xl font-bold"
                    animate={{
                      color: ["#b8860b", "#ffd700", "#b8860b"],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {msg.text}
                  </motion.h2>
                  
                  {showFinalReveal && (
                    <motion.div
                      className="mt-12"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", damping: 15 }}
                    >
                      {/* Glowing symbol */}
                      <motion.div
                        className="inline-block text-8xl text-gold mb-6"
                        animate={{
                          filter: [
                            "drop-shadow(0 0 10px #ffd700)",
                            "drop-shadow(0 0 30px #ffd700)",
                            "drop-shadow(0 0 10px #ffd700)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ✧
                      </motion.div>
                      
                      {/* Decorative line */}
                      <motion.div
                        className="w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.p
                  className={`text-xl md:text-2xl lg:text-3xl ${
                    index === currentMessageIndex
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {msg.text}
                </motion.p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Radial glow in center */}
      {showFinalReveal && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        </motion.div>
      )}
    </motion.div>
  )
}
