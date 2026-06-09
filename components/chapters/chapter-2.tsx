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
    <p className="text-lg leading-relaxed text-card">
      A Verdade exige um preço equivalente.
      <br />
      Quando um alquimista busca apenas vingança,
      <br />
      o que ela pode tomar dele?
    </p>
  </div>
),
  validateAnswer: (answer) => {
  const normalized = normalizeAnswer(answer)
  return normalized === "visao"
},

achievementTitle: "Capítulo 2 Completo",
achievementDescription: `O primeiro passo não conhece destino.
O que parte sem mapa confia no vazio.
E no vazio, tudo ainda pode ser.`,
}