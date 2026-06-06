"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterEffectProps {
  text: string
  delay?: number
  speed?: number
  className?: string
  onComplete?: () => void
}

export function TypewriterEffect({
  text,
  delay = 0,
  speed = 50,
  className = "",
  onComplete,
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let currentIndex = 0

    const startTyping = () => {
      const typeChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
          timeoutId = setTimeout(typeChar, speed)
        } else {
          setIsComplete(true)
          onComplete?.()
        }
      }
      typeChar()
    }

    timeoutId = setTimeout(startTyping, delay)

    return () => clearTimeout(timeoutId)
  }, [text, delay, speed, onComplete])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="ml-0.5 inline-block h-[1em] w-[2px] bg-gold align-middle"
        />
      )}
    </motion.span>
  )
}
