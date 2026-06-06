import type { ReactNode } from "react"

/**
 * Estrutura de um capítulo/enigma.
 * Cada capítulo fica em seu próprio arquivo dentro de components/chapters/
 * e segue este formato. Edite cada arquivo de forma independente.
 */
export interface Chapter {
  /** Número do capítulo (sequência) */
  id: number
  /** Título exibido no topo da página e no navegador */
  title: string
  /** Texto narrativo de introdução (aparece antes do enigma) */
  narrative: string
  /** Dica mostrada ao jogador */
  hint: string
  /**
   * Conteúdo visual opcional do enigma (imagens, símbolos, texto especial).
   * Se não for fornecido, aparece um símbolo decorativo padrão.
   */
  puzzleContent?: ReactNode
  /**
   * Função que valida a resposta do jogador.
   * Retorne true se a resposta estiver correta.
   */
  validateAnswer: (answer: string) => boolean
  /** Título da conquista exibida ao concluir o capítulo */
  achievementTitle: string
  /** Descrição da conquista */
  achievementDescription: string
}

/**
 * Função auxiliar para comparar respostas ignorando
 * maiúsculas/minúsculas, acentos e espaços extras.
 */
export function normalizeAnswer(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}
