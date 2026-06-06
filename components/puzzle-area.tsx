"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface PuzzleAreaProps {
  puzzleContent?: React.ReactNode
  hint?: string
  onSubmit: (answer: string) => void
  isCorrect?: boolean | null
}

export function PuzzleArea({ puzzleContent, hint, onSubmit, isCorrect }: PuzzleAreaProps) {
  const [answer, setAnswer] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (answer.trim()) {
      onSubmit(answer.trim())
    }
  }

  return (
    <div className="space-y-6">
      {/* Puzzle content area */}
      <motion.div
        className="relative p-6 bg-card/80 rounded-lg border border-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Glow effect for mysterious symbols */}
        <div className="absolute inset-0 rounded-lg bg-gold/5 pointer-events-none" />
        
        {puzzleContent || (
          <div className="text-center py-8">
            <div className="text-6xl mb-4 animate-glow text-gold">◇</div>
            <p className="text-muted-foreground italic">
              O enigma aparecerá aqui...
            </p>
          </div>
        )}
      </motion.div>

      {/* Hint area */}
      {hint && (
        <motion.div
          className="flex items-start gap-3 p-4 bg-secondary/50 rounded border border-border"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-gold text-lg">✧</span>
          <p className="text-sm text-muted-foreground italic">{hint}</p>
        </motion.div>
      )}

      {/* Answer input */}
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="relative">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Digite sua resposta..."
            className={`
              w-full px-4 py-3 bg-input border-2 rounded-lg
              text-foreground placeholder:text-muted-foreground
              focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold
              transition-all duration-300
              ${isCorrect === true ? "border-green-500 bg-green-500/10" : ""}
              ${isCorrect === false ? "border-destructive bg-destructive/10" : "border-border"}
            `}
          />
          
          {isCorrect !== null && (
            <motion.span
              className={`absolute right-4 top-1/2 -translate-y-1/2 text-xl ${isCorrect ? "text-green-500" : "text-destructive"}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
            >
              {isCorrect ? "✓" : "✗"}
            </motion.span>
          )}
        </div>

        <motion.button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-gold-dark to-gold text-background font-semibold rounded-lg
                     hover:shadow-lg hover:shadow-gold/25 transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={!answer.trim()}
        >
          Confirmar Resposta
        </motion.button>
      </motion.form>
    </div>
  )
}
