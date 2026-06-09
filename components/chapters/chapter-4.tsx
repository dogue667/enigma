import { type Chapter, normalizeAnswer } from "./types"

/**
 * CAPÍTULO 4 — Vozes do Passado
 *
 * Edite livremente este arquivo de forma independente dos demais.
 */
export const chapter4: Chapter = {
  id: 4,
  title: "O Local de Cura",

  narrative:
    "Olhe mais a fundo onde te mostram o caminho",

  hint: "Talvez seja a hora de olhar mais fundo nos detalhes(chave:casa)",

  puzzleContent: (
    <div className="text-center py-6">
      <p className="text-lg leading-relaxed text-card">
          {";:h\:<H<?P)/|QH?;?P;"}
      </p>
    </div>
  ),

  validateAnswer: (answer) => {
    const normalized = normalizeAnswer(answer)

    return (
      normalized === normalizeAnswer("Centro de Saúde Band Amir") ||
      normalized === normalizeAnswer("مرکز صحی بند امير")
    )
  },

  achievementTitle: "Capítulo 4 Completo",

achievementDescription: `Quando estruturas falsas caem,
o que resta não é destruição — é clareza.
Só entende o fim quem viu o começo.`,
}