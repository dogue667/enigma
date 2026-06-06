"use client"

import { useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { StartScreen } from "@/components/start-screen"
import { JournalPage } from "@/components/journal-page"
import { ProgressBar } from "@/components/progress-bar"
import { ChapterNavigator } from "@/components/chapter-navigator"
import { PuzzleArea } from "@/components/puzzle-area"
import { AchievementModal } from "@/components/achievement-modal"
import { ChapterTransition } from "@/components/chapter-transition"
import { FinalScreen } from "@/components/final-screen"
import { ProgressScreen } from "@/components/progress-screen"
import { FloatingSymbols } from "@/components/floating-symbols"
import { DustParticles } from "@/components/dust-particles"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { chapters as chapterContent } from "@/components/chapters"

// Estado de progresso de cada capítulo, derivado do conteúdo importado.
// O CONTEÚDO dos enigmas fica em components/chapters/chapter-N.tsx
type ChapterProgress = {
  id: number
  title: string
  isCompleted: boolean
  isCurrent: boolean
  isLocked: boolean
}

const initialProgress: ChapterProgress[] = chapterContent.map((ch, index) => ({
  id: ch.id,
  title: ch.title,
  isCompleted: false,
  isCurrent: index === 0,
  isLocked: index !== 0,
}))

export default function MysteryExperience() {
  const [gameState, setGameState] = useState<"start" | "playing" | "final">("start")
  const [progressList, setProgressList] = useState<ChapterProgress[]>(initialProgress)
  const [currentChapter, setCurrentChapter] = useState(chapterContent[0]?.id ?? 1)
  const [showAchievement, setShowAchievement] = useState(false)
  const [achievementData, setAchievementData] = useState({ title: "", description: "" })
  const [showTransition, setShowTransition] = useState(false)
  const [transitionChapters, setTransitionChapters] = useState({ from: 1, to: 2 })
  const [showProgressScreen, setShowProgressScreen] = useState(false)
  const [answerResult, setAnswerResult] = useState<boolean | null>(null)

  const totalChapters = progressList.length
  const completedChapters = progressList.filter((c) => c.isCompleted).length
  const progress = (completedChapters / totalChapters) * 100

  // Conteúdo do capítulo atual (texto, dica, validação, etc.)
  const currentContent = chapterContent.find((c) => c.id === currentChapter)
  const currentProgress = progressList.find((c) => c.id === currentChapter)
  const isLastChapter = currentChapter === chapterContent[chapterContent.length - 1]?.id

  const handleStart = () => {
    setGameState("playing")
  }

  const handlePuzzleSubmit = useCallback(
    (answer: string) => {
      if (!currentContent) return

      // Valida usando a função definida no arquivo do capítulo
      const isCorrect = currentContent.validateAnswer(answer)
      setAnswerResult(isCorrect)

      if (isCorrect) {
        // Mostra a conquista definida no arquivo do capítulo
        setTimeout(() => {
          setAchievementData({
            title: currentContent.achievementTitle,
            description: currentContent.achievementDescription,
          })
          setShowAchievement(true)
        }, 500)

        // Avança para o próximo capítulo (ou tela final)
        setTimeout(() => {
          if (!isLastChapter) {
            setTransitionChapters({ from: currentChapter, to: currentChapter + 1 })
            setShowTransition(true)
          } else {
            setGameState("final")
          }
        }, 2000)
      } else {
        // Limpa o erro após um instante
        setTimeout(() => setAnswerResult(null), 1500)
      }
    },
    [currentContent, currentChapter, isLastChapter],
  )

  const handleTransitionComplete = () => {
    setProgressList((prev) =>
      prev.map((ch) => {
        if (ch.id === currentChapter) return { ...ch, isCompleted: true, isCurrent: false }
        if (ch.id === currentChapter + 1) return { ...ch, isCurrent: true, isLocked: false }
        return ch
      }),
    )
    setCurrentChapter((prev) => prev + 1)
    setShowTransition(false)
    setAnswerResult(null)
  }

  const handleChapterSelect = (chapterId: number) => {
    const chapter = progressList.find((c) => c.id === chapterId)
    if (chapter && !chapter.isLocked) {
      setProgressList((prev) =>
        prev.map((ch) => ({
          ...ch,
          isCurrent: ch.id === chapterId,
        })),
      )
      setCurrentChapter(chapterId)
      setAnswerResult(null)
    }
  }

  return (
    <main className="relative min-h-screen bg-background">
      {/* Background effects */}
      <FloatingSymbols />
      <DustParticles />

      {/* Start Screen */}
      <AnimatePresence>{gameState === "start" && <StartScreen onStart={handleStart} />}</AnimatePresence>

      {/* Main Game Interface */}
      <AnimatePresence>
        {gameState === "playing" && (
          <motion.div
            className="relative z-10 min-h-screen py-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header with progress */}
            <header className="max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-between mb-6">
                <motion.h1
                  className="text-2xl font-bold text-gold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  Os Arquivos Proibidos
                </motion.h1>

                <motion.button
                  onClick={() => setShowProgressScreen(true)}
                  className="px-4 py-2 text-sm text-muted-foreground border border-border rounded-lg
                             hover:border-gold/50 hover:text-gold transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  Ver Progresso
                </motion.button>
              </div>

              <ProgressBar progress={progress} chapter={currentChapter} totalChapters={totalChapters} />
            </header>

            {/* Chapter Navigator */}
            <motion.div
              className="max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ChapterNavigator chapters={progressList} onChapterSelect={handleChapterSelect} />
            </motion.div>

            {/* Journal Page */}
            <JournalPage key={currentChapter}>
              {/* Chapter title */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-gold-dark/80 text-sm tracking-[0.2em] uppercase mb-2">
                  Capítulo {currentChapter}
                </p>
                <h2 className="text-3xl font-bold text-card mb-4">
                  <TypewriterEffect text={currentProgress?.title || ""} speed={80} />
                </h2>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-dark to-transparent mx-auto" />
              </motion.div>

              {/* Narrative text from chapter file */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-card/80 leading-relaxed mb-6 italic">{currentContent?.narrative}</p>
              </motion.div>

              {/* Puzzle Area - content/hint from chapter file */}
              <PuzzleArea
                puzzleContent={currentContent?.puzzleContent}
                hint={currentContent?.hint}
                onSubmit={handlePuzzleSubmit}
                isCorrect={answerResult}
              />
            </JournalPage>

            {/* Footer decoration */}
            <motion.div
              className="max-w-4xl mx-auto mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-xs text-muted-foreground/50 tracking-wider">{"\u25C7 DOCUMENTO CLASSIFICADO \u25C7"}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final Screen */}
      <FinalScreen isVisible={gameState === "final"} />

      {/* Chapter Transition */}
      <ChapterTransition
        isVisible={showTransition}
        fromChapter={transitionChapters.from}
        toChapter={transitionChapters.to}
        onComplete={handleTransitionComplete}
      />

      {/* Achievement Modal */}
      <AchievementModal
        isOpen={showAchievement}
        onClose={() => setShowAchievement(false)}
        title={achievementData.title}
        description={achievementData.description}
      />

      {/* Progress Screen */}
      <AnimatePresence>
        {showProgressScreen && (
          <ProgressScreen
            chapters={progressList}
            completedPercentage={progress}
            onClose={() => setShowProgressScreen(false)}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
