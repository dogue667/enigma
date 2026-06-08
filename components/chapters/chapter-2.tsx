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
  "A Verdade cobra um preço. De quem só enxerga a vingança, o que ela pode tirar?",

hint:
  "Assista Fullmetal Alchemist.",

  // Conteúdo visual opcional do enigma
  puzzleContent: (
    <div className="text-center py-6">
      <div className="text-6xl mb-4 animate-glow text-gold">{"\u25B3"}</div>
      <p className="font-mono text-lg tracking-[0.3em] text-card/70">{"\u25C9   \u2727   \u25B3"}</p>
    </div>
  ),

  
  validateAnswer: (answer) => {
  const normalized = normalizeAnswer(answer)
  return normalized === "visao"
},

  achievementTitle: "Capítulo 2 Completo",
  achievementDescription: "Os símbolos revelaram seu segredo. Você está sendo observado...",
}
