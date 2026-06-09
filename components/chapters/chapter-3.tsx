import { type Chapter, normalizeAnswer } from "./types"

/**
 * CAPÍTULO 3 — A Cifra Perdida
 *
 * Edite livremente este arquivo de forma independente dos demais.
 */
export const chapter3: Chapter = {
  id: 3,
  title: "A Cifra Perdida",

  narrative:
    "Uma sequência de letras embaralhadas foi gravada com força no papel. " +
    "Quem escreveu parecia temer que alguém a lesse. Decifre a palavra oculta: \"@pcllqwss000 ZNQ\".",

  hint: "Cada letra foi deslocada uma posição no alfabeto. Volte uma letra de cada vez.",

  puzzleContent: (
    <div className="text-center py-6">
      <p className="font-mono text-3xl tracking-[0.4em] text-card animate-glow">@pcllqwss000 ZNQ</p>
      <p className="text-sm text-card/60 mt-3 italic">{"\u2190 Cifra de C\u00e9sar (deslocamento 24)"}</p>
    </div>
  ),

  validateAnswer: (answer) => {
    const normalized = normalizeAnswer(answer)
    return normalized === "metronomo"
  },

achievementTitle: "Capítulo 3 Completo",
achievementDescription: `Entre o que é dito e o que é guardado,
existe um silêncio que observa tudo.
A verdade não grita — ela espera.`,
}
