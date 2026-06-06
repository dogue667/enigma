"use client"

import { motion } from "framer-motion"

interface ProgressBarProps {
  progress: number
  chapter: number
  totalChapters: number
}

export function ProgressBar({ progress, chapter, totalChapters }: ProgressBarProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground tracking-wider uppercase">
          Capítulo {chapter} de {totalChapters}
        </span>
        <span className="text-sm text-gold font-semibold">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="relative h-2 bg-secondary rounded-full overflow-hidden border border-border">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-dark to-gold rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>
    </div>
  )
}
