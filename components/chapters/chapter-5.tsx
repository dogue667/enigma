import { type Chapter, normalizeAnswer } from "./types"

/**
 * CAPÍTULO 5 — O Último Enigma
 *
 * Edite livremente este arquivo de forma independente dos demais.
 * Este é o capítulo final, que leva à tela de encerramento.
 */
export const chapter5: Chapter = {
  id: 5,
  title: "O Último Enigma",

  narrative:
    "Quatro vozes guiaram o caminho. Agora, só resta uma escolha silenciosa.",

  hint: "junte todos os textos pos respostas certas",

  puzzleContent: (
    <div className="text-center py-6">
      <p className="font-mono text-2xl tracking-[0.3em] text-card animate-glow">
       "..."
      </p>
    </div>
  ),

  // Resposta correta: tarot
  validateAnswer: (answer) => {
    const normalized = normalizeAnswer(answer)
    return normalized === "tarot" 
  },

  achievementTitle: "Mistério Desvendado",
  achievementDescription: `Você rompeu o último selo. A verdade finalmente se revela diante de seus olhos.`,
}
