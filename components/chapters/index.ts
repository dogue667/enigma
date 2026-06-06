import type { Chapter } from "./types"
import { chapter1 } from "./chapter-1"
import { chapter2 } from "./chapter-2"
import { chapter3 } from "./chapter-3"
import { chapter4 } from "./chapter-4"
import { chapter5 } from "./chapter-5"

/**
 * REGISTRO CENTRAL DE CAPÍTULOS
 *
 * Para adicionar um novo enigma:
 * 1. Crie um arquivo chapter-N.tsx seguindo o modelo dos existentes.
 * 2. Importe-o aqui.
 * 3. Adicione-o na lista abaixo, na ordem desejada.
 *
 * Para remover um enigma, basta tirá-lo da lista.
 * A ordem do array define a sequência do jogo.
 */
export const chapters: Chapter[] = [chapter1, chapter2, chapter3, chapter4, chapter5]

export type { Chapter } from "./types"
