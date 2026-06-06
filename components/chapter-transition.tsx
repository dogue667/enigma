"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ChapterTransitionProps {
  isVisible: boolean
  fromChapter: number
  toChapter: number
  onComplete: () => void
}

export function ChapterTransition({ isVisible, fromChapter, toChapter, onComplete }: ChapterTransitionProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onComplete()
      }, 3500)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onComplete])
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Vignette effect */}
          <div className="absolute inset-0 vignette" />
          
          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ delay: 0.3 }}
            >
              <motion.p
                className="text-muted-foreground text-lg mb-4 tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Capítulo {fromChapter} concluído
              </motion.p>
              
              <motion.div
                className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
              
              <motion.h2
                className="text-5xl md:text-7xl font-bold text-gold mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", damping: 15 }}
              >
                Capítulo {toChapter}
              </motion.h2>
              
              <motion.p
                className="text-foreground text-xl tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                Um novo mistério aguarda...
              </motion.p>
            </motion.div>
            
            {/* Decorative symbols */}
            <motion.div
              className="absolute -top-20 -left-20 text-6xl text-gold/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ◈
            </motion.div>
            <motion.div
              className="absolute -bottom-20 -right-20 text-6xl text-gold/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              ⬡
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
