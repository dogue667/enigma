import { type Chapter, normalizeAnswer } from "./types"

/**
 * CAPÍTULO 1 — O Primeiro Sinal
 *
 * Edite livremente este arquivo:
 * - title:        título do capítulo
 * - narrative:    texto de introdução
 * - hint:         dica para o jogador
 * - puzzleContent: (opcional) conteúdo visual do enigma
 * - validateAnswer: lógica que valida a resposta correta
 */


export const chapter1: Chapter = {
  id: 1,
  title: "O começo",

  narrative:
    "Cada vez mais perto da verdade...",

  puzzleContent: (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        Decifre o segredo
      </h2>

      <p>
        frrnq://bmaq.emmejc.amk/bmaskclr/b/13VU9Cu6VxfJtA7IECrn0S3lOW-XfFc251ByCY-6SYvC/cbgr?sqn=qfypgle
      </p>
    </div>
  ),

  hint: "Talvez seja a hora de se mover 24 passos pra direita",

  validateAnswer: (answer) => {
    const normalized = normalizeAnswer(answer)
      return normalized === "Esopo" || normalized === "esopo" || normalized === "esopo de cesareia"
  },

  achievementTitle: "Capítulo 1 Completo",
  achievementDescription: "O primeiro selo foi rompido.",
}