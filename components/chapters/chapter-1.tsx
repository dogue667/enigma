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
    "O diário se abre numa página amarelada pelo tempo. Uma única frase foi rabiscada às pressas: " +
    "\"Onde a sombra encontra a luz, o primeiro número se revela.\" Há marcas de tinta seca ao redor, " +
    "como se quem escreveu tivesse hesitado antes de continuar...",

  hint: "Talvez seja a hora de se mover 24 passos pra direita",

 
  validateAnswer: (answer) => {
    const normalized = normalizeAnswer(answer)
    return normalized === "8" || normalized === "oito"
  },

  achievementTitle: "Capítulo 1 Completo",
  achievementDescription: "O primeiro selo foi rompido. O mistério apenas começa...",
}
