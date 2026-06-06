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
    "A última página brilha com uma luz dourada. Todos os símbolos anteriores convergem aqui. " +
    "Uma frase final permanece: \"Some os selos que rompeste e encontrarás a chave que abre a verdade.\"",

  hint: "Você desvendou 4 capítulos antes deste. Some os números de 1 a 5.",

  puzzleContent: (
    <div className="text-center py-6">
      <p className="font-mono text-2xl tracking-[0.3em] text-card animate-glow">
        1 + 2 + 3 + 4 + 5 = ?
      </p>
    </div>
  ),

  // Resposta correta: 15
  validateAnswer: (answer) => {
    const normalized = normalizeAnswer(answer)
    return normalized === "15" || normalized === "quinze"
  },

  achievementTitle: "Mistério Desvendado",
  achievementDescription: "Você rompeu o último selo. A verdade finalmente se revela diante de seus olhos.",
}
