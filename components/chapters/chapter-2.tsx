import { type Chapter, normalizeAnswer } from "./types"

/**
 * CAPÍTULO 2 — Símbolos Ocultos
 *
 * Edite livremente este arquivo de forma independente dos demais.
 */
export const chapter2: Chapter = {
  id: 2,
  title: "O princípio da alquimia",

  narrative:
    "O princípio fundamental da alquimia " +
    "numa dança silenciosa. No canto inferior, uma anotação: \"O que tudo vê, mas nunca dorme?\"",

  hint: "Pense em algo que está sempre observando, presente em pirâmides e cédulas antigas.",

  // Conteúdo visual opcional do enigma
  puzzleContent: (
    <div className="text-center py-6">
      <div className="text-6xl mb-4 animate-glow text-gold">{"\u25B3"}</div>
      <p className="font-mono text-lg tracking-[0.3em] text-card/70">{"\u25C9   \u2727   \u25B3"}</p>
    </div>
  ),

  // Resposta correta: "olho" (ou "olho que tudo vê")
  validateAnswer: (answer) => {
    const normalized = normalizeAnswer(answer)
    return normalized.includes("olho")
  },

  achievementTitle: "Capítulo 2 Completo",
  achievementDescription: "Os símbolos revelaram seu segredo. Você está sendo observado...",
}
