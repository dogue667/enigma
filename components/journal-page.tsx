"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface JournalPageProps {
  children: ReactNode
  className?: string
}

export function JournalPage({ children, className = "" }: JournalPageProps) {
  return (
    <motion.div
      className={`relative mx-auto max-w-4xl ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Outer book shadow */}
      <div className="absolute -inset-4 bg-black/40 rounded-lg blur-2xl" />
      
      {/* Book spine shadow */}
      <div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-black/30 via-black/50 to-black/30 blur-sm z-10" />
      
      {/* Main journal container */}
      <div className="relative bg-parchment rounded-lg shadow-2xl overflow-hidden">
        {/* Paper texture overlay */}
        <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none" />
        
        {/* Aged corners */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-parchment-dark/40 to-transparent" />
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-parchment-dark/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-parchment-dark/40 to-transparent" />
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-parchment-dark/40 to-transparent" />
        
        {/* Decorative border */}
        <div className="absolute inset-4 border border-gold-dark/30 rounded pointer-events-none" />
        <div className="absolute inset-6 border border-gold-dark/20 rounded pointer-events-none" />
        
        {/* Corner ornaments */}
        <div className="absolute top-4 left-4 text-gold-dark/40 text-2xl">◆</div>
        <div className="absolute top-4 right-4 text-gold-dark/40 text-2xl">◆</div>
        <div className="absolute bottom-4 left-4 text-gold-dark/40 text-2xl">◆</div>
        <div className="absolute bottom-4 right-4 text-gold-dark/40 text-2xl">◆</div>
        
        {/* Page fold effect */}
        <div className="absolute top-0 right-0 w-12 h-12">
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[48px] border-l-transparent border-t-[48px] border-t-parchment-dark/30" />
        </div>
        
        {/* Content area */}
        <div className="relative z-10 p-8 md:p-12 min-h-[500px] text-card">
          {children}
        </div>
        
        {/* Binding marks on the left */}
        <div className="absolute left-2 top-1/4 w-1 h-3 bg-gold-dark/30 rounded-full" />
        <div className="absolute left-2 top-1/2 w-1 h-3 bg-gold-dark/30 rounded-full" />
        <div className="absolute left-2 top-3/4 w-1 h-3 bg-gold-dark/30 rounded-full" />
      </div>
    </motion.div>
  )
}
