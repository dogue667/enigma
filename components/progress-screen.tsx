"use client"

import { motion } from "framer-motion"

interface Chapter {
  id: number
  title: string
  isCompleted: boolean
  isCurrent: boolean
  isLocked: boolean
}

interface ProgressScreenProps {
  chapters: Chapter[]
  completedPercentage: number
  onClose: () => void
}

export function ProgressScreen({ chapters, completedPercentage, onClose }: ProgressScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-2xl bg-card border-2 border-gold/30 rounded-lg p-8 overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Paper texture */}
        <div className="absolute inset-0 paper-texture opacity-10 pointer-events-none" />
        
        {/* Decorative corners */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gold/50" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gold/50" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gold/50" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gold/50" />

        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            className="text-3xl text-gold mb-2"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ◈
          </motion.div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Progresso da Investigação</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Overall progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Progresso Total</span>
            <span className="text-lg font-bold text-gold">{Math.round(completedPercentage)}%</span>
          </div>
          <div className="h-3 bg-secondary rounded-full overflow-hidden border border-border">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-dark to-gold rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${completedPercentage}%` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </div>

        {/* Chapters list */}
        <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              className={`
                flex items-center gap-4 p-3 rounded-lg border transition-colors
                ${chapter.isCompleted
                  ? "bg-gold/10 border-gold/30"
                  : chapter.isCurrent
                    ? "bg-secondary border-gold/50"
                    : chapter.isLocked
                      ? "bg-muted/20 border-border opacity-50"
                      : "bg-secondary/50 border-border"
                }
              `}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {/* Status icon */}
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center border
                ${chapter.isCompleted
                  ? "bg-gold/20 border-gold text-gold"
                  : chapter.isCurrent
                    ? "bg-gold/10 border-gold text-gold animate-pulse"
                    : "bg-muted border-border text-muted-foreground"
                }
              `}>
                {chapter.isCompleted ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : chapter.isLocked ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ) : (
                  <span className="text-sm font-semibold">{chapter.id}</span>
                )}
              </div>

              {/* Chapter info */}
              <div className="flex-1">
                <p className={`font-medium ${chapter.isLocked ? "text-muted-foreground" : "text-foreground"}`}>
                  Capítulo {chapter.id}
                </p>
                <p className="text-xs text-muted-foreground">{chapter.title}</p>
              </div>

              {/* Status badge */}
              {chapter.isCurrent && (
                <span className="text-xs text-gold px-2 py-1 bg-gold/10 rounded border border-gold/30">
                  ATUAL
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Close button */}
        <motion.button
          onClick={onClose}
          className="mt-6 w-full py-3 bg-secondary text-foreground font-medium rounded-lg
                     border border-border hover:border-gold/50 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Fechar
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
