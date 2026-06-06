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
  title: "o segredo da crunchyroll",

  narrative:
    "O diário se abre numa página amarelada pelo tempo...",

  puzzleContent: (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        Decifre o segredo
      </h2>

      <p>
        Qual é o nome da plataforma de animes mais famosa?
      </p>
    </div>
  ),

  hint: "Talvez seja a hora de se mover 24 passos pra direita",

  validateAnswer: (answer) => {
    const normalized = normalizeAnswer(answer)
    return normalized === "crunchyroll"
  },

  achievementTitle: "Capítulo 1 Completo",
  achievementDescription: "O primeiro selo foi rompido.",
}