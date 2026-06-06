import { type Chapter, normalizeAnswer } from "./types"

/**
 * CAPÍTULO 4 — Vozes do Passado
 *
 * Edite livremente este arquivo de forma independente dos demais.
 */
export const chapter4: Chapter = {
  id: 4,
  title: "Vozes do Passado",

  narrative:
    "Entre as páginas, uma carta antiga sussurra um enigma: \"Tenho cidades, mas não casas. " +
    "Tenho montanhas, mas não árvores. Tenho água, mas não peixes. O que sou eu?\"",

  hint: "Você me usa para encontrar caminhos e lugares que nunca visitou.",

  // Resposta correta: "mapa"
  validateAnswer: (answer) => {
    const normalized = normalizeAnswer(answer)
    return normalized === "mapa" || normalized === "um mapa"
  },

  achievementTitle: "Capítulo 4 Completo",
  achievementDescription: "As vozes do passado se calaram, satisfeitas. Falta apenas um selo...",
}
