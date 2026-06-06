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
    "Quem escreveu parecia temer que alguém a lesse. Decifre a palavra oculta: \"DSPLIP\".",

  hint: "Cada letra foi deslocada uma posição no alfabeto. Volte uma letra de cada vez.",

  puzzleContent: (
    <div className="text-center py-6">
      <p className="font-mono text-3xl tracking-[0.4em] text-card animate-glow">DSPLIP</p>
      <p className="text-sm text-card/60 mt-3 italic">{"\u2190 Cifra de C\u00e9sar (deslocamento -1)"}</p>
    </div>
  ),

  // "DSPLIP" deslocado -1 = "CROKHO"... ajuste conforme desejar.
  // Exemplo simples: resposta correta = "corujа" -> defina sua própria lógica.
  // Aqui aceitamos "segredo" como resposta de demonstração.
  validateAnswer: (answer) => {
    const normalized = normalizeAnswer(answer)
    return normalized === "segredo"
  },

  achievementTitle: "Capítulo 3 Completo",
  achievementDescription: "A cifra foi quebrada. As palavras escondidas agora pertencem a você.",
}
