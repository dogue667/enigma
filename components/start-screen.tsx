"use client"

import { motion } from "framer-motion"

interface StartScreenProps {
  onStart: () => void
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 vignette" />

      {/* Floating decorative symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold/15"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${10 + Math.floor(i / 4) * 30}%`,
              fontSize: `${24 + Math.random() * 24}px`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {["◇", "△", "○", "☆", "◈", "⬡", "⬢", "✧", "⟁", "⌘"][i % 10]}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        {/* Decorative top element */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="text-4xl text-gold animate-glow">◈</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold via-gold to-gold-dark">
            Os Arquivos Proibidos
          </span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-12 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          &quot;Alguns segredos foram feitos para serem encontrados...&quot;
        </motion.p>

        {/* Start button */}
        <motion.button
          onClick={onStart}
          className="group relative px-12 py-4 bg-transparent border-2 border-gold text-gold font-semibold text-lg
                     rounded-lg overflow-hidden transition-all duration-500
                     hover:text-background hover:shadow-lg hover:shadow-gold/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Button background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 tracking-wider">INICIAR INVESTIGAÇÃO</span>
        </motion.button>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <p className="text-xs text-muted-foreground/50 tracking-[0.3em] uppercase">
            Nível de Classificação: Ultra Secreto
          </p>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-8 left-8 text-gold/20 text-3xl"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        ╔
      </motion.div>
      <motion.div
        className="absolute top-8 right-8 text-gold/20 text-3xl"
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        ╗
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-8 text-gold/20 text-3xl"
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        ╚
      </motion.div>
      <motion.div
        className="absolute bottom-8 right-8 text-gold/20 text-3xl"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        ╝
      </motion.div>
    </motion.div>
  )
}
