"use client"

import { motion } from "framer-motion"

interface Chapter {
  id: number
  title: string
  isCompleted: boolean
  isCurrent: boolean
  isLocked: boolean
}

interface ChapterNavigatorProps {
  chapters: Chapter[]
  onChapterSelect: (chapterId: number) => void
}

export function ChapterNavigator({ chapters, onChapterSelect }: ChapterNavigatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {chapters.map((chapter, index) => (
        <motion.button
          key={chapter.id}
          onClick={() => !chapter.isLocked && onChapterSelect(chapter.id)}
          className={`
            relative flex items-center justify-center
            w-10 h-10 rounded-full border-2 transition-all duration-300
            ${chapter.isCompleted
              ? "border-gold bg-gold/20 text-gold"
              : chapter.isCurrent
                ? "border-gold bg-gold/10 text-gold animate-pulse-gold"
                : chapter.isLocked
                  ? "border-muted bg-muted/20 text-muted-foreground cursor-not-allowed"
                  : "border-border bg-secondary text-muted-foreground hover:border-gold/50"
            }
          `}
          whileHover={!chapter.isLocked ? { scale: 1.1 } : {}}
          whileTap={!chapter.isLocked ? { scale: 0.95 } : {}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {chapter.isCompleted ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : chapter.isLocked ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          ) : (
            <span className="text-sm font-semibold">{chapter.id}</span>
          )}
          
          {chapter.isCurrent && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gold"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.button>
      ))}
    </div>
  )
}
