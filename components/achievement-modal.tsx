"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

interface AchievementModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
}

export function AchievementModal({ isOpen, onClose, title, description }: AchievementModalProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 4000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            className="relative z-10 max-w-md w-full"
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="relative bg-card border-2 border-gold rounded-lg p-8 text-center overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold" />
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gold/5"
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Icon */}
              <motion.div
                className="relative mx-auto w-20 h-20 mb-6 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center"
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 15 }}
              >
                <motion.span
                  className="text-4xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  ✧
                </motion.span>
              </motion.div>
              
              <motion.p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Conquista Desbloqueada
              </motion.p>
              
              <motion.h3
                className="text-2xl font-bold text-foreground mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {title}
              </motion.h3>
              
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {description}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
